import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn_-277ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn_-277ym"/>`,
		"fallback": "mdi:account-reactivate",
	});
}

export default Component;
