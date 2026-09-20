import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k521avb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k521avb8i"/>`,
		"fallback": "mdi:egg-off-outline",
	});
}

export default Component;
