import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2vn_c5fn.css';
import '../../css/d/darff9bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l2vn_c5fn"/><path class="darff9bdc wm-a"/></g>`,
		"fallback": "withicons:contrast-solid",
	});
}

export default Component;
