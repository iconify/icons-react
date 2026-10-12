import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nli3kkeli.css';
import '../../css/g/g5o4zccob.css';
import '../../css/j/jobzj2bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nli3kkeli"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="jobzj2bqv"/></g>`,
		"fallback": "andrsrxn:chess-bishop",
	});
}

export default Component;
