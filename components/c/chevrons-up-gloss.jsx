import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o70fmfbfo.css';
import '../../css/n/n_sijcbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o70fmfbfo wm-k"/><path class="n_sijcbqa wm-a"/></g>`,
		"fallback": "withicons:chevrons-up-gloss",
	});
}

export default Component;
