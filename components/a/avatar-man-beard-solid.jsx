import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bm_oq-ifm.css';
import '../../css/p/p4k_69b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bm_oq-ifm"/><path class="p4k_69b3r wm-a"/></g>`,
		"fallback": "withicons:avatar-man-beard-solid",
	});
}

export default Component;
