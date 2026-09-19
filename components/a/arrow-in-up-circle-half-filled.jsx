import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev1jbccli.css';
import '../../css/i/if80w2ton.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev1jbccli"/><path class="if80w2ton"/>`,
		"fallback": "boxicons:arrow-in-up-circle-half-filled",
	});
}

export default Component;
