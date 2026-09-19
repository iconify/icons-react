import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e99jhfb5t.css';
import '../../css/l/lu5eqws_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e99jhfb5t"/><path class="lu5eqws_g"/></g>`,
		"fallback": "cryptocurrency-color:bnty",
	});
}

export default Component;
