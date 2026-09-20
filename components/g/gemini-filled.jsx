import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyq4be05e.css';
import '../../css/j/jh9bw45zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kyq4be05e"/><path class="jh9bw45zd"/></g>`,
		"fallback": "reicon:gemini-filled",
	});
}

export default Component;
