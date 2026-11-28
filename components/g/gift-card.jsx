import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/a/ah6sqybwi.css';
import '../../css/z/zec44e7ke.css';
import '../../css/w/wppt0-b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ammxg4bjk"/><path class="ah6sqybwi"/><path class="zec44e7ke"/><path class="wppt0-b2x"/></g>`,
		"fallback": "iconaut:gift-card",
	});
}

export default Component;
