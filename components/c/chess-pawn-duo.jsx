import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvyyz5b8g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q4o4ithkw.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvyyz5b8g secondary"/><g class="dt0cm9dhy primary"><path class="q4o4ithkw"/><path class="kbxpyqdun"/></g>`,
		"fallback": "iconaut:chess-pawn-duo",
	});
}

export default Component;
