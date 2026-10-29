import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xo0o48pnw.css';
import '../../css/t/tv_jq265p.css';
import '../../css/p/p5_oe4bdz.css';
import '../../css/z/zp_i0m3my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xo0o48pnw"/><path class="tv_jq265p wm-a"/><path class="p5_oe4bdz wm-k"/><path class="wm-a zp_i0m3my"/></g>`,
		"fallback": "withicons:file-spreadsheet-sketch",
	});
}

export default Component;
