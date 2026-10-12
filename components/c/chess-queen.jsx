import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nilxxfzmw.css';
import '../../css/g/g5o4zccob.css';
import '../../css/a/asa1cab6r.css';
import '../../css/x/x8hx43bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nilxxfzmw"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="asa1cab6r"/><path class="x8hx43bre"/></g>`,
		"fallback": "andrsrxn:chess-queen",
	});
}

export default Component;
