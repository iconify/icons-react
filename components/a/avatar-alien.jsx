import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/perqy2_8f.css';
import '../../css/j/jqmingbnd.css';
import '../../css/r/ryjo06blq.css';
import '../../css/j/j5_-2_7vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcyfM1cqE" x1="3.5" x2="20.5" y1="2" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="perqy2_8f wm-k"/><path stroke="url(#SVGcyfM1cqE)" class="jqmingbnd wm-s"/><path class="ryjo06blq wm-shine"/><path class="j5_-2_7vn wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-alien",
	});
}

export default Component;
