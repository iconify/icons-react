import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/g/g7dt3p6dr.css';
import '../../css/c/cedyn8zij.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="g7dt3p6dr"/><path class="cedyn8zij"/></g>`,
		"fallback": "streamline-color:gold-flat",
	});
}

export default Component;
