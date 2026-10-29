import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/enheowbon.css';
import '../../css/x/xgxrfebxf.css';
import '../../css/v/vfndyme9l.css';
import '../../css/s/skn8acc-z.css';
import '../../css/c/c0bw40ovn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="enheowbon wm-k"/><path class="wm-a xgxrfebxf"/><path class="vfndyme9l wm-shadow"/><path class="skn8acc-z wm-a"/><path class="c0bw40ovn wm-k"/></g>`,
		"fallback": "withicons:chart-bar-decreasing-engrave",
	});
}

export default Component;
