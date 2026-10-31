import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sujzv6b-h.css';
import '../../css/m/mj46t_bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sujzv6b-h wm-k"/><path class="mj46t_bkb wm-s"/></g>`,
		"fallback": "withicons:brain-cog-gloss",
	});
}

export default Component;
