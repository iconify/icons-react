import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rl-eitl3q.css';
import '../../css/v/va4gn_b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rl-eitl3q wm-k"/><path class="va4gn_b8e wm-a"/></g>`,
		"fallback": "withicons:chevron-last-gloss",
	});
}

export default Component;
