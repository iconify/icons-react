import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqd-lj30l.css';

const viewBox = {"width":304,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqd-lj30l"/>`,
		"fallback": "ps:boiled-egg",
	});
}

export default Component;
