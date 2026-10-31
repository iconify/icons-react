import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnjik9b_u.css';
import '../../css/l/l7jkn8v6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rnjik9b_u wm-a"/><path class="l7jkn8v6k wm-k"/></g>`,
		"fallback": "withicons:avatar-woman-bun-gloss",
	});
}

export default Component;
