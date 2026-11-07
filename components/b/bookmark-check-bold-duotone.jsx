import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2y5qfqd.css';
import '../../css/n/nfi2y3beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy2y5qfqd"/><path class="nfi2y3beh"/>`,
		"fallback": "solar:bookmark-check-bold-duotone",
	});
}

export default Component;
