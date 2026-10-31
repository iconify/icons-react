import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wa963rb8n.css';
import '../../css/h/hnbttjbcz.css';
import '../../css/y/ypb1-e_mg.css';
import '../../css/z/zzfqjkp3t.css';
import '../../css/t/twb1ybc6x.css';
import '../../css/b/bgijo4m-n.css';
import '../../css/u/un9ki7tku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGz4HG8dKH" x1="10" x2="14" y1="1.8" y2="22.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wa963rb8n wm-k"/><path class="hnbttjbcz wm-deco"/><path class="wm-k ypb1-e_mg"/><path fill="url(#SVGz4HG8dKH)" class="wm-k zzfqjkp3t"/><path class="twb1ybc6x wm-shadow"/><path class="bgijo4m-n wm-shine"/><path class="un9ki7tku wm-shine"/></g>`,
		"fallback": "withicons-valentine:hexagon",
	});
}

export default Component;
