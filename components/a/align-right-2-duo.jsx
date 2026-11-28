import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f68w--bkk.css';
import '../../css/e/efuzmpewr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f68w--bkk"/><path class="efuzmpewr"/></g>`,
		"fallback": "iconaut:align-right-2-duo",
	});
}

export default Component;
