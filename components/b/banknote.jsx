import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kk_r3xb-e.css';
import '../../css/g/glvtzljvv.css';
import '../../css/m/mol6oxg3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGa1wMzbRu" x1="1.02" x2="23" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGa1wMzbRu)" class="kk_r3xb-e wm-k"/><path class="glvtzljvv wm-shine"/><path class="mol6oxg3o wm-shine"/></g>`,
		"fallback": "withicons-lunar:banknote",
	});
}

export default Component;
