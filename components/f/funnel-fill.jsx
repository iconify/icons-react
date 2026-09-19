import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkzgt2baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkzgt2baw"/>`,
		"fallback": "eva:funnel-fill",
	});
}

export default Component;
