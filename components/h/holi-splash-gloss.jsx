import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u1es_sd0l.css';
import '../../css/b/bw3my9j_s.css';
import '../../css/i/iunz_1kfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u1es_sd0l wm-k"/><path class="bw3my9j_s wm-a"/><path class="iunz_1kfp wm-s"/></g>`,
		"fallback": "withicons:holi-splash-gloss",
	});
}

export default Component;
