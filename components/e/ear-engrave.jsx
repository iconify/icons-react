import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xam1dm6sv.css';
import '../../css/m/mal8gswuu.css';
import '../../css/p/p4b-8obnr.css';
import '../../css/t/tbbshccdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xam1dm6sv"/><path class="mal8gswuu wm-shadow"/><path class="p4b-8obnr wm-k"/><path class="tbbshccdj wm-a"/></g>`,
		"fallback": "withicons:ear-engrave",
	});
}

export default Component;
