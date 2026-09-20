import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb3of5z4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb3of5z4u"/>`,
		"fallback": "ri:dashboard-3-fill",
	});
}

export default Component;
