import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vzvps3yit.css';
import '../../css/z/zg8-tubfe.css';
import '../../css/s/szjwgvu8m.css';
import '../../css/p/pmvsu2bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vzvps3yit wm-k"/><path class="wm-deco zg8-tubfe"/><path fill="url(#SVGNQi7UdpF)" class="szjwgvu8m wm-k"/><path class="pmvsu2bbn wm-shadow"/></g>`,
		"fallback": "withicons-valentine:chart-funnel",
	});
}

export default Component;
