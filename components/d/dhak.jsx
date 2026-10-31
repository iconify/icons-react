import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/frfg72bgr.css';
import '../../css/t/tdew__0uo.css';
import '../../css/y/ykuz_2j_y.css';
import '../../css/k/krv73gbff.css';
import '../../css/z/zo_1kcbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="frfg72bgr wm-shadow"/><path class="tdew__0uo wm-shadow"/><path class="ykuz_2j_y"/><path class="krv73gbff"/><path class="zo_1kcbsl"/></g>`,
		"fallback": "withicons-brutal:dhak",
	});
}

export default Component;
