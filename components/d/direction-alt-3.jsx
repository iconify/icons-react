import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/x/x8w-ys76v.css';
import '../../css/q/qqiprnblu.css';
import '../../css/w/wvx0llyqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="x8w-ys76v"/><path class="qqiprnblu"/><path class="wvx0llyqr"/></g>`,
		"fallback": "lets-icons:direction-alt-3",
	});
}

export default Component;
