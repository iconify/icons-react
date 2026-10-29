import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7_1u210p.css';
import '../../css/k/kkr1b2x1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h7_1u210p"/><path class="kkr1b2x1b wm-a"/></g>`,
		"fallback": "withicons:golf-solid",
	});
}

export default Component;
