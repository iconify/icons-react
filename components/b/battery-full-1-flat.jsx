import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m0psg9b7n.css';
import '../../css/c/c9v92rbri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m0psg9b7n"/><path class="c9v92rbri"/></g>`,
		"fallback": "streamline-color:battery-full-1-flat",
	});
}

export default Component;
