import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi_5gbxpy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i01j-sbop.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zi_5gbxpy"/><g class="dt0cm9dhy primary"><path class="i01j-sbop"/><path class="kbxpyqdun"/></g>`,
		"fallback": "iconaut:chess-bishop-duo",
	});
}

export default Component;
