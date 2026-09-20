import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nr8urwvkd.css';
import '../../css/l/l-vyf3bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nr8urwvkd"/><path class="l-vyf3bgr"/></g>`,
		"fallback": "reicon:dollar-square-filled",
	});
}

export default Component;
