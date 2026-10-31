import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/qk2zreb4n.css';
import '../../css/s/sxravwbnq.css';
import '../../css/n/nt2kus0kw.css';
import '../../css/c/cz-_2qbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsUbZtdFo" x1="1.5" x2="22.5" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsUbZtdFo)" class="qk2zreb4n wm-k"/><path class="sxravwbnq wm-a"/><path class="nt2kus0kw wm-shine"/><path class="cz-_2qbsv wm-shine"/></g>`,
		"fallback": "withicons-lunar:cash-register",
	});
}

export default Component;
