import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjzajobpc.css';
import '../../css/w/whu8gg7-e.css';
import '../../css/n/nd3hq4prs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wjzajobpc"/><path class="whu8gg7-e"/><circle transform="matrix(-1 0 0 1 21 16)" class="nd3hq4prs"/></g>`,
		"fallback": "hugeicons:cricket-bat",
	});
}

export default Component;
