import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eim7--b-x.css';
import '../../css/b/btxwm6bkt.css';
import '../../css/u/u6jpcwfqz.css';
import '../../css/y/ykgfagzcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eim7--b-x"/><path class="btxwm6bkt wm-k"/><path class="u6jpcwfqz wm-k"/><path class="wm-a ykgfagzcz"/></g>`,
		"fallback": "withicons:drill-sketch",
	});
}

export default Component;
