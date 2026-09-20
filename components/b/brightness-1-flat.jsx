import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7e88o65b.css';
import '../../css/j/jfgk029jb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7e88o65b"/><path clip-rule="evenodd" class="jfgk029jb"/></g>`,
		"fallback": "streamline-color:brightness-1-flat",
	});
}

export default Component;
