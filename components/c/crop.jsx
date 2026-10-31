import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mgs_1f9ue.css';
import '../../css/t/t6g5ptbhe.css';
import '../../css/i/i_muin0hb.css';
import '../../css/d/d_atqwb9x.css';
import '../../css/x/xgiq5obvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mgs_1f9ue wm-shadow"/><path class="t6g5ptbhe"/><path class="i_muin0hb"/><path class="d_atqwb9x"/><path class="xgiq5obvw"/></g>`,
		"fallback": "withicons-retro:crop",
	});
}

export default Component;
