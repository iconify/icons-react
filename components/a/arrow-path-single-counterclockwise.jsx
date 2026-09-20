import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7-336bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7-336bry"/>`,
		"fallback": "sidekickicons:arrow-path-single-counterclockwise",
	});
}

export default Component;
