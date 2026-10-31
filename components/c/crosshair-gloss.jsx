import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxe6t8brf.css';
import '../../css/j/j34sv2b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kxe6t8brf wm-k"/><path class="j34sv2b_g wm-a"/></g>`,
		"fallback": "withicons:crosshair-gloss",
	});
}

export default Component;
