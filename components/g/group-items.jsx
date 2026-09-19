import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxggonbsq.css';
import '../../css/u/uew7wgbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxggonbsq"/><path class="uew7wgbot"/></g>`,
		"fallback": "hugeicons:group-items",
	});
}

export default Component;
