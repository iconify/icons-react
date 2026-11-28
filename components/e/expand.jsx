import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w1do95bqy.css';
import '../../css/r/rux1pnbud.css';
import '../../css/f/fgcsyup1y.css';
import '../../css/y/yhkm5ubbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w1do95bqy"/><path class="rux1pnbud"/><path class="fgcsyup1y"/><path class="yhkm5ubbl"/></g>`,
		"fallback": "iconaut:expand",
	});
}

export default Component;
