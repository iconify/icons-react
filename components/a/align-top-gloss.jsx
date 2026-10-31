import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mfu0bffic.css';
import '../../css/i/ifgkj9b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mfu0bffic wm-k"/><path class="ifgkj9b_x wm-a"/></g>`,
		"fallback": "withicons:align-top-gloss",
	});
}

export default Component;
