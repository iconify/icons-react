import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga6l3xnfc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1z7q3bfk.css';
import '../../css/d/d32py0roj.css';
import '../../css/r/rjsiwsb8d.css';
import '../../css/c/c8_qq32sd.css';
import '../../css/f/frvx07aef.css';
import '../../css/h/h4_j_tb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga6l3xnfc secondary"/><g class="dt0cm9dhy primary"><path class="d1z7q3bfk"/><path class="d32py0roj"/><path class="rjsiwsb8d"/><path class="c8_qq32sd"/><path class="frvx07aef"/><path class="h4_j_tb2s"/></g>`,
		"fallback": "iconaut:ai-detect-duo",
	});
}

export default Component;
