import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_qmisawt.css';
import '../../css/d/d4q-g1b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="b_qmisawt wm-k"/><path class="d4q-g1b9d wm-a"/></g>`,
		"fallback": "withicons:chevron-first-gloss",
	});
}

export default Component;
