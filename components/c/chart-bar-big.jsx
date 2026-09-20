import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy4qd-b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy4qd-b3e"/>`,
		"fallback": "keyline-icons:chart-bar-big",
	});
}

export default Component;
