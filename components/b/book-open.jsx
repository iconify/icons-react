import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7hhee7pc.css';
import '../../css/s/s6cpd9b7b.css';
import '../../css/n/nf-bjexag.css';
import '../../css/u/u6rmo-bar.css';
import '../../css/p/pb3f6qbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7hhee7pc wm-k"/><path class="s6cpd9b7b wm-shine"/><path class="nf-bjexag wm-shine"/><path class="u6rmo-bar wm-shine"/><path class="pb3f6qbdb wm-shine"/></g>`,
		"fallback": "withicons-lunar:book-open",
	});
}

export default Component;
