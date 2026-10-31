import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wd55dfb2t.css';
import '../../css/r/rzedhsi-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wd55dfb2t wm-k"/><path class="rzedhsi-a wm-a"/></g>`,
		"fallback": "withicons:contactless-gloss",
	});
}

export default Component;
