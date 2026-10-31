import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgiiasbyl.css';
import '../../css/d/dcjhuscnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dgiiasbyl wm-k"/><path class="dcjhuscnl wm-a"/></g>`,
		"fallback": "withicons:edit-gloss",
	});
}

export default Component;
