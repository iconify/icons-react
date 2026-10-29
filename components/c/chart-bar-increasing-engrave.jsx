import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u4654lkvf.css';
import '../../css/x/xgxrfebxf.css';
import '../../css/t/t53o8mnme.css';
import '../../css/s/skn8acc-z.css';
import '../../css/r/ralcq11vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u4654lkvf wm-k"/><path class="wm-a xgxrfebxf"/><path class="t53o8mnme wm-shadow"/><path class="skn8acc-z wm-a"/><path class="ralcq11vz wm-k"/></g>`,
		"fallback": "withicons:chart-bar-increasing-engrave",
	});
}

export default Component;
