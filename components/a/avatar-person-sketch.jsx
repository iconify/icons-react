import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aerk3sbog.css';
import '../../css/k/kjec_i-xm.css';
import '../../css/b/bkaybsb9q.css';
import '../../css/k/kx36_kbvm.css';
import '../../css/z/z-wr12dvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aerk3sbog wm-k"/><path class="kjec_i-xm wm-k"/><path class="bkaybsb9q wm-k"/><path class="kx36_kbvm wm-k"/><path class="wm-k z-wr12dvo"/></g>`,
		"fallback": "withicons:avatar-person-sketch",
	});
}

export default Component;
