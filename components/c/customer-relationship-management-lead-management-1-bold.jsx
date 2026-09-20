import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6rii6cio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6rii6cio"/>`,
		"fallback": "streamline-ultimate:customer-relationship-management-lead-management-1-bold",
	});
}

export default Component;
