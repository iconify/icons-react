import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kpg7o_brl.css';
import '../../css/a/as_5d5b2x.css';
import '../../css/p/pq-94fbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kpg7o_brl"/><path class="as_5d5b2x"/><rect class="pq-94fbkm"/></g>`,
		"fallback": "lucide:file-lock",
	});
}

export default Component;
