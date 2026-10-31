import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/c/cp859qdfl.css';
import '../../css/c/cbbp90bih.css';
import '../../css/e/e95u9r09o.css';
import '../../css/v/v6w_nkb0m.css';
import '../../css/m/m55jzlbix.css';
import '../../css/m/mmrfytbhc.css';
import '../../css/y/ylmkxvmyy.css';
import '../../css/g/gyh190btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvZLLte8C" x1="10" x2="14" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="cp859qdfl wm-k"/><path class="cbbp90bih wm-a"/><path class="e95u9r09o wm-deco"/><path fill="url(#SVGvZLLte8C)" class="v6w_nkb0m wm-k"/><path class="m55jzlbix wm-a"/><path class="mmrfytbhc wm-shadow"/><path class="wm-shine ylmkxvmyy"/><path class="gyh190btb wm-shine"/></g>`,
		"fallback": "withicons-valentine:cast",
	});
}

export default Component;
