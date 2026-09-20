import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4l0vjnhk.css';
import '../../css/u/ujkx2actq.css';
import '../../css/g/gcoa79bur.css';
import '../../css/j/jp0ue7rnb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="u4l0vjnhk"/><circle class="ujkx2actq"/><path class="gcoa79bur"/><path class="jp0ue7rnb"/></g>`,
		"fallback": "oui:face-neutral",
	});
}

export default Component;
