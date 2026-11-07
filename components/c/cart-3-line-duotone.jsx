import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wdhm326bq.css';
import '../../css/a/ahcwsvb2k.css';
import '../../css/l/lgdpnsvji.css';
import '../../css/y/yqmotfmyy.css';
import '../../css/b/b1nxqifcp.css';
import '../../css/z/zy4x83b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wdhm326bq"/><path class="ahcwsvb2k"/><path class="lgdpnsvji"/><path class="yqmotfmyy"/><path class="b1nxqifcp"/><path class="zy4x83b9r"/></g>`,
		"fallback": "solar:cart-3-line-duotone",
	});
}

export default Component;
