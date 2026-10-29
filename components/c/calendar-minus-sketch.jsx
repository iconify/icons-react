import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dkzxnqbrb.css';
import '../../css/r/rn54dybwb.css';
import '../../css/k/kqufevifz.css';
import '../../css/m/m6ykkbbfn.css';
import '../../css/t/tp61zgbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dkzxnqbrb"/><path class="rn54dybwb wm-k"/><path class="kqufevifz wm-a"/><path class="m6ykkbbfn wm-k"/><path class="tp61zgbyw wm-a"/></g>`,
		"fallback": "withicons:calendar-minus-sketch",
	});
}

export default Component;
