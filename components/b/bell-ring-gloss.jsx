import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3l-p37pn.css';
import '../../css/o/oqhk8nbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t3l-p37pn wm-k"/><path class="oqhk8nbks wm-s"/></g>`,
		"fallback": "withicons:bell-ring-gloss",
	});
}

export default Component;
