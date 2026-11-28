import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn7npcb6i.css';
import '../../css/i/i1za66bhv.css';
import '../../css/e/e8mk_9b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nn7npcb6i"/><path class="i1za66bhv"/><path class="e8mk_9b-m"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left-line-flip",
	});
}

export default Component;
