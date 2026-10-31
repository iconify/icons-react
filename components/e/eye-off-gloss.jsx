import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hx8hw7b9s.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hx8hw7b9s wm-k"/><path class="wm-s xnodzworh"/></g>`,
		"fallback": "withicons:eye-off-gloss",
	});
}

export default Component;
