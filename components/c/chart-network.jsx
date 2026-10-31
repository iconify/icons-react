import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xyhma1byl.css';
import '../../css/z/zvmzjbbls.css';
import '../../css/q/qzne7v01y.css';
import '../../css/l/lfw3vwb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgzMGhciJ" x1="2.5" x2="22.23" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGgzMGhciJ)" class="wm-k xyhma1byl"/><path fill="url(#SVGgzMGhciJ)" class="wm-a zvmzjbbls"/><path class="qzne7v01y wm-shine"/><path class="lfw3vwb8e wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-network",
	});
}

export default Component;
