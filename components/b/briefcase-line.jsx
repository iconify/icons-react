import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxjjeiv6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxjjeiv6r"/>`,
		"fallback": "majesticons:briefcase-line",
	});
}

export default Component;
