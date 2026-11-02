import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umzobabcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umzobabcf"/>`,
		"fallback": "sidekickicons:arrow-curve-right-up",
	});
}

export default Component;
