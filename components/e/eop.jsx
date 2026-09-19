import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7f20y_lh.css';
import '../../css/z/z2mv3cc_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e7f20y_lh"/><path class="z2mv3cc_i"/></g>`,
		"fallback": "cryptocurrency-color:eop",
	});
}

export default Component;
