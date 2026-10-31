import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xpijhsp7z.css';
import '../../css/q/qotz6ss9a.css';
import '../../css/w/wv7pllk5t.css';
import '../../css/k/k7a_e2muu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGh2WpIbGY" x1="1.5" x2="21.49" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGh2WpIbGY)" class="wm-k xpijhsp7z"/><path class="qotz6ss9a wm-a"/><path class="wm-shine wv7pllk5t"/><path class="k7a_e2muu wm-shine"/></g>`,
		"fallback": "withicons-lunar:hand-coins",
	});
}

export default Component;
