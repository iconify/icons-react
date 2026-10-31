import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uuqbb5g5c.css';
import '../../css/o/o-328ub6x.css';
import '../../css/k/kf9sgbcth.css';
import '../../css/u/ug9u30k-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGG1WmuyQA" x1="1.55" x2="22.46" y1="1.37" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="uuqbb5g5c wm-k"/><path stroke="url(#SVGG1WmuyQA)" class="o-328ub6x wm-s"/><path class="kf9sgbcth wm-shine"/><path class="ug9u30k-b wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-upload",
	});
}

export default Component;
