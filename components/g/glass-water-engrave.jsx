import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x27i95usk.css';
import '../../css/l/l1h02sb3a.css';
import '../../css/m/myh2jmy5u.css';
import '../../css/e/em4t9mizl.css';
import '../../css/s/s2uhgxbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x27i95usk"/><path class="l1h02sb3a wm-a"/><path class="myh2jmy5u wm-shadow"/><path class="em4t9mizl wm-k"/><path class="s2uhgxbuo wm-a"/></g>`,
		"fallback": "withicons:glass-water-engrave",
	});
}

export default Component;
