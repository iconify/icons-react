import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km-s25uct.css';
import '../../css/g/g5o4zccob.css';
import '../../css/z/zrb5eurrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="km-s25uct"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="zrb5eurrl"/></g>`,
		"fallback": "andrsrxn:chess-pawn",
	});
}

export default Component;
