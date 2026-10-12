import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw65xgb3l.css';
import '../../css/g/g5o4zccob.css';
import '../../css/s/sko61s_um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sw65xgb3l"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="sko61s_um"/></g>`,
		"fallback": "andrsrxn:chess-king",
	});
}

export default Component;
