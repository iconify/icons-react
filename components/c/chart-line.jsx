import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/l9kvm_boo.css';
import '../../css/y/ya24uwbuh.css';
import '../../css/x/xcjw23bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtl0ZkcFC" x1="10" x2="14" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="l9kvm_boo wm-k"/><path class="wm-deco ya24uwbuh"/><path fill="url(#SVGtl0ZkcFC)" class="wm-k xcjw23bgo"/></g>`,
		"fallback": "withicons-valentine:chart-line",
	});
}

export default Component;
