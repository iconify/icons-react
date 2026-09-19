import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rtily522h.css';
import '../../css/u/u80y2f7gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="rtily522h"/><path class="u80y2f7gv"/></g>`,
		"fallback": "humbleicons:camera-off",
	});
}

export default Component;
