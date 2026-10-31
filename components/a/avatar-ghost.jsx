import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/st7kosbvp.css';
import '../../css/c/c2agevoup.css';
import '../../css/l/lsqn54bwn.css';
import '../../css/q/qfdcbbd4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="st7kosbvp wm-shadow"/><path class="c2agevoup wm-shadow"/><path class="lsqn54bwn"/><path class="qfdcbbd4i"/></g>`,
		"fallback": "withicons-brutal:avatar-ghost",
	});
}

export default Component;
