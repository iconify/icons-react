import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ef7wp1p3q.css';
import '../../css/e/emgbm6m5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ef7wp1p3q"/><path class="emgbm6m5b wm-s"/></g>`,
		"fallback": "withicons:haunted-house-solid",
	});
}

export default Component;
