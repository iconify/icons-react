import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l3s_a_bog.css';
import '../../css/e/eyqhmtbas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l3s_a_bog"/><path class="eyqhmtbas"/></g>`,
		"fallback": "streamline-flex-color:bell-flat",
	});
}

export default Component;
