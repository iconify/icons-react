import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k802e6byw.css';
import '../../css/e/e9qj2ib-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k802e6byw"/><path class="e9qj2ib-q"/></g>`,
		"fallback": "streamline-color:bag-suitcase-2",
	});
}

export default Component;
