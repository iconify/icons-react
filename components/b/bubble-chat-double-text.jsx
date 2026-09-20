import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vil_4pbkk.css';
import '../../css/r/rxgfkbbrm.css';
import '../../css/j/jjw4oibie.css';
import '../../css/d/do4-en45l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vil_4pbkk"/><path class="rxgfkbbrm"/><path class="jjw4oibie"/><path class="do4-en45l"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-double-text",
	});
}

export default Component;
