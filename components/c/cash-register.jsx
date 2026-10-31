import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_blqplly.css';
import '../../css/y/yjj_jmb-w.css';
import '../../css/n/npfel0b4c.css';
import '../../css/n/nauixvbup.css';
import '../../css/x/xuuma2bbh.css';
import '../../css/v/v369-ftvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w_blqplly wm-shadow"/><path class="yjj_jmb-w"/><path class="npfel0b4c"/><path class="nauixvbup"/><path class="xuuma2bbh"/><path class="v369-ftvd"/></g>`,
		"fallback": "withicons-retro:cash-register",
	});
}

export default Component;
