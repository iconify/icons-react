import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zuzkyh-pm.css';
import '../../css/e/enkke99-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zuzkyh-pm"/><path class="enkke99-d wm-a"/></g>`,
		"fallback": "withicons:chart-donut-gloss",
	});
}

export default Component;
