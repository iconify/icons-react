import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ml2tjfbhe.css';
import '../../css/t/tpr-u5v4f.css';
import '../../css/c/c8jvjcb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ml2tjfbhe"/><path class="tpr-u5v4f"/><path class="c8jvjcb8a"/></g>`,
		"fallback": "andrsrxn:donut",
	});
}

export default Component;
