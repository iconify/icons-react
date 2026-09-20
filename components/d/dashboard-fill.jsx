import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_c1zacxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_c1zacxe"/>`,
		"fallback": "ri:dashboard-fill",
	});
}

export default Component;
