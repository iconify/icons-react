import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyuyjnbmb.css';
import '../../css/x/xf879kbtn.css';
import '../../css/x/xb6o97btl.css';
import '../../css/k/k5csy4bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xyuyjnbmb"/><path class="wm-a xf879kbtn"/><path class="wm-k xb6o97btl"/><path class="k5csy4bbb wm-a"/></g>`,
		"fallback": "withicons:airplay-sketch",
	});
}

export default Component;
