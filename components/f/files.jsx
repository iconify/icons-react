import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/e4tqwtbdb.css';
import '../../css/m/mm2op1fub.css';
import '../../css/h/h5_w1ufwk.css';
import '../../css/f/f-akx7tzi.css';
import '../../css/k/kzs8gvfir.css';
import '../../css/x/xfjyweb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjs2y6jCY" x1="2.5" x2="21.5" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="e4tqwtbdb wm-k"/><path fill="url(#SVGjs2y6jCY)" class="mm2op1fub wm-a"/><path class="h5_w1ufwk wm-shine"/><path class="f-akx7tzi wm-shine"/><path class="kzs8gvfir wm-shine"/><path class="wm-shine xfjyweb3n"/></g>`,
		"fallback": "withicons-lunar:files",
	});
}

export default Component;
