import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/wqf5ygb6r.css';
import '../../css/i/iewoovbjt.css';
import '../../css/r/rcofsob4y.css';
import '../../css/o/oudhiczrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9U292dIY" x1="2.58" x2="21.45" y1="1.2" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVG9U292dIY)" class="wm-k wqf5ygb6r"/><path fill="url(#SVG9U292dIY)" class="iewoovbjt wm-a"/><path class="rcofsob4y wm-shine"/><path class="oudhiczrr wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-lightning",
	});
}

export default Component;
