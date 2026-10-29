import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sfq88wc1b.css';
import '../../css/t/tnz7amgmb.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/r/r4m5x7bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sfq88wc1b wm-k"/><path class="tnz7amgmb wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="r4m5x7bba wm-a"/></g>`,
		"fallback": "withicons:ban-engrave",
	});
}

export default Component;
