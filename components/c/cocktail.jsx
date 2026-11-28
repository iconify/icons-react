import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i8wtt5bzu.css';
import '../../css/i/i_c4vbt4x.css';
import '../../css/l/lb_6x_9bo.css';
import '../../css/f/fn0m0tdnr.css';
import '../../css/j/jwjkiwb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i8wtt5bzu"/><path class="i_c4vbt4x"/><path class="lb_6x_9bo"/><path class="fn0m0tdnr"/><path class="jwjkiwb3k"/></g>`,
		"fallback": "iconaut:cocktail",
	});
}

export default Component;
