import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l_l9j54wb.css';
import '../../css/i/ibs3oxbpk.css';
import '../../css/e/ew9z_ybft.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/l/lqo0vdbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l_l9j54wb wm-k"/><path class="ibs3oxbpk wm-s"/><path class="ew9z_ybft wm-shadow"/><path class="m2ebxhp-u wm-k"/><path class="lqo0vdbtn wm-s"/></g>`,
		"fallback": "withicons:cloud-download-engrave",
	});
}

export default Component;
