import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwqn_bbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwqn_bbiq"/>`,
		"fallback": "ri:corner-up-right-fill",
	});
}

export default Component;
