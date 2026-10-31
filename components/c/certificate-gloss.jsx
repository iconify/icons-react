import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r4zm8ub_n.css';
import '../../css/t/tm2hi0b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r4zm8ub_n wm-k"/><path class="tm2hi0b_t wm-a"/></g>`,
		"fallback": "withicons:certificate-gloss",
	});
}

export default Component;
