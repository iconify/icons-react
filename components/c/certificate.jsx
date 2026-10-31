import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/t5pir-_-w.css';
import '../../css/a/aczt7so3g.css';
import '../../css/x/xnny_dbqt.css';
import '../../css/r/rugrw861d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSFyuKbyO" x1="1.5" x2="22.5" y1="3.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGSFyuKbyO)" class="t5pir-_-w wm-k"/><path fill="url(#SVGSFyuKbyO)" class="aczt7so3g wm-a"/><path class="wm-shine xnny_dbqt"/><path class="rugrw861d wm-shine"/></g>`,
		"fallback": "withicons-lunar:certificate",
	});
}

export default Component;
