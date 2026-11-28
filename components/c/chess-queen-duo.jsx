import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r029m-boa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a12an581p.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r029m-boa secondary"/><g class="dt0cm9dhy primary"><path class="a12an581p"/><path class="kbxpyqdun"/></g>`,
		"fallback": "iconaut:chess-queen-duo",
	});
}

export default Component;
