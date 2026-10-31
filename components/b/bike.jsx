import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fhw4kbfyh.css';
import '../../css/b/bonmh3bqx.css';
import '../../css/n/njl1ckt5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGywkf1bHE" x1="1" x2="23" y1="4.5" y2="20.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGywkf1bHE)" class="fhw4kbfyh wm-k"/><path class="bonmh3bqx wm-shine"/><path class="njl1ckt5d wm-shine"/></g>`,
		"fallback": "withicons-lunar:bike",
	});
}

export default Component;
