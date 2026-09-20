import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s16nwnbzm.css';
import '../../css/d/d1nthkbwk.css';
import '../../css/v/v_ibbwbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s16nwnbzm"/><path class="d1nthkbwk"/><path class="v_ibbwbff"/></g>`,
		"fallback": "solar:balloon-linear",
	});
}

export default Component;
