import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rlsac7obx.css';
import '../../css/o/ow-__pceu.css';
import '../../css/n/nsfdoabrq.css';
import '../../css/m/mytsqsu7w.css';
import '../../css/r/rivq1nv_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rlsac7obx"/><path class="ow-__pceu"/><path class="nsfdoabrq"/><path class="mytsqsu7w"/><path class="rivq1nv_i"/></g>`,
		"fallback": "solar:airbuds-right-broken",
	});
}

export default Component;
