import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mqvzp87-o.css';
import '../../css/t/tq3ds1bsy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mqvzp87-o"/><path class="tq3ds1bsy"/></g>`,
		"fallback": "streamline-color:beer-pitch-flat",
	});
}

export default Component;
