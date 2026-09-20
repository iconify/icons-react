import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzrupabws.css';
import '../../css/g/g68ucqfls.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jzrupabws"/><path class="g68ucqfls"/></g>`,
		"fallback": "streamline-color:bone",
	});
}

export default Component;
