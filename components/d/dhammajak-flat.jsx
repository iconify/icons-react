import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mtri55bbd.css';
import '../../css/a/ahlcbwbaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mtri55bbd"/><path class="ahlcbwbaw"/></g>`,
		"fallback": "streamline-color:dhammajak-flat",
	});
}

export default Component;
