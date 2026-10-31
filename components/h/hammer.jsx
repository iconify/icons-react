import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qck3nxp6h.css';
import '../../css/v/vzdihpb0v.css';
import '../../css/u/ude15obok.css';
import '../../css/c/cc4eftjaf.css';
import '../../css/x/xlroajblq.css';
import '../../css/h/h2diykgsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qck3nxp6h wm-shadow"/><path class="vzdihpb0v"/><path class="ude15obok"/><path class="cc4eftjaf"/><path class="xlroajblq"/><path class="h2diykgsv"/></g>`,
		"fallback": "withicons-retro:hammer",
	});
}

export default Component;
