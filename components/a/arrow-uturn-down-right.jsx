import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c16u-3bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c16u-3bcp"/>`,
		"fallback": "sidekickicons:arrow-uturn-down-right",
	});
}

export default Component;
