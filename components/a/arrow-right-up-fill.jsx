import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwv-rhboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwv-rhboz"/>`,
		"fallback": "ri:arrow-right-up-fill",
	});
}

export default Component;
