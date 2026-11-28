import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi3r6abpq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fe53ifbdz.css';
import '../../css/y/ygbs7gbiy.css';
import '../../css/e/e8gc3zb7m.css';
import '../../css/t/tyc4keb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi3r6abpq secondary"/><g class="dt0cm9dhy primary"><path class="fe53ifbdz"/><path class="ygbs7gbiy"/><path class="e8gc3zb7m"/><path class="tyc4keb9v"/></g>`,
		"fallback": "iconaut:history-cog-duo",
	});
}

export default Component;
