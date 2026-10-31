import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/ra1ukge6q.css';
import '../../css/y/y-mutq_ki.css';
import '../../css/s/ss7osgb2k.css';
import '../../css/n/nzd009bje.css';
import '../../css/d/duasq5bua.css';
import '../../css/e/e5t5j33_q.css';
import '../../css/z/zoctaccxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGn12SaeCO" x1="10" x2="14" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ra1ukge6q wm-k"/><path class="wm-deco y-mutq_ki"/><path class="ss7osgb2k wm-k"/><path fill="url(#SVGn12SaeCO)" class="nzd009bje wm-k"/><path class="duasq5bua wm-shadow"/><path class="e5t5j33_q wm-shine"/><path class="wm-shine zoctaccxe"/></g>`,
		"fallback": "withicons-valentine:badge-percent",
	});
}

export default Component;
