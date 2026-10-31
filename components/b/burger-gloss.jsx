import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7ylyc1bh.css';
import '../../css/u/uj7ud-bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h7ylyc1bh wm-k"/><path class="uj7ud-bgk wm-a"/></g>`,
		"fallback": "withicons:burger-gloss",
	});
}

export default Component;
