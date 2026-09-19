import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvb9twb3e.css';
import '../../css/q/q0sfd_b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvb9twb3e"/><path class="q0sfd_b_s"/>`,
		"fallback": "circum:gps",
	});
}

export default Component;
