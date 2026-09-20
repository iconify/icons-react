import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrimse02m.css';
import '../../css/j/j6tt01bhr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrimse02m"/><path class="j6tt01bhr"/></g>`,
		"fallback": "streamline-color:home-3",
	});
}

export default Component;
