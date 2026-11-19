import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l14xmvd-t.css';
import '../../css/l/lvlrsmbgb.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/o/oa5wg7wvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l14xmvd-t"/><path class="lvlrsmbgb"/><path class="w5p5w4_bh"/><path class="oa5wg7wvl"/></g>`,
		"fallback": "andrsrxn:face-smile-sparkle",
	});
}

export default Component;
