import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peg-w5qff.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v_p127tlh.css';
import '../../css/n/ng8mcwblf.css';
import '../../css/f/fny23pt9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peg-w5qff secondary"/><g class="dt0cm9dhy primary"><path class="v_p127tlh"/><path class="ng8mcwblf"/><path class="fny23pt9r"/></g>`,
		"fallback": "iconaut:cloud-rainbow-duo",
	});
}

export default Component;
