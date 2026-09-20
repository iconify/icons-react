import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qww11omoa.css';
import '../../css/m/mhvhrv90s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qww11omoa"/><path class="mhvhrv90s"/>`,
		"fallback": "stash:circle-dot",
	});
}

export default Component;
