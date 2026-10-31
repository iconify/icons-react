import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xml-zccik.css';
import '../../css/s/s5_ph8bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k xml-zccik"/><path class="s5_ph8bbs wm-a"/></g>`,
		"fallback": "withicons:dragon-head-gloss",
	});
}

export default Component;
