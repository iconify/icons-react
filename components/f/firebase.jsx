import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3ew7caks.css';
import '../../css/h/hrxhp9b1x.css';
import '../../css/q/qp9ttxbyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3ew7caks"/><path class="hrxhp9b1x"/><path class="qp9ttxbyq"/>`,
		"fallback": "selfhst:firebase",
	});
}

export default Component;
