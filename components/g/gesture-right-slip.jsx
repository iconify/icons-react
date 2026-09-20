import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_86a8jql.css';
import '../../css/h/h7k96m0fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_86a8jql"/><path class="h7k96m0fy"/></g>`,
		"fallback": "tdesign:gesture-right-slip",
	});
}

export default Component;
