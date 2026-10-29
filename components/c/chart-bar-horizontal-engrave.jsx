import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkoj08ryw.css';
import '../../css/x/xgxrfebxf.css';
import '../../css/j/jjih60n0t.css';
import '../../css/s/skn8acc-z.css';
import '../../css/s/sjsppzltu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zkoj08ryw"/><path class="wm-a xgxrfebxf"/><path class="jjih60n0t wm-shadow"/><path class="skn8acc-z wm-a"/><path class="sjsppzltu wm-k"/></g>`,
		"fallback": "withicons:chart-bar-horizontal-engrave",
	});
}

export default Component;
