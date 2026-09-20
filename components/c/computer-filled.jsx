import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irbl6q5vy.css';
import '../../css/n/n-jwa8bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="irbl6q5vy"/><path clip-rule="evenodd" class="n-jwa8bwq"/></g>`,
		"fallback": "reicon:computer-filled",
	});
}

export default Component;
