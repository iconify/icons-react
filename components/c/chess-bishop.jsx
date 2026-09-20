import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct31yccqe.css';
import '../../css/m/my1excbtc.css';
import '../../css/y/yslcpvuze.css';
import '../../css/f/frdahab5c.css';
import '../../css/f/fbwx5gbcg.css';
import '../../css/d/do83wsjmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ct31yccqe"/><path class="my1excbtc"/><path class="yslcpvuze"/><path class="frdahab5c"/><path class="fbwx5gbcg"/><path class="do83wsjmr"/></g>`,
		"fallback": "streamline-color:chess-bishop",
	});
}

export default Component;
