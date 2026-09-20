import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i76hc9b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i76hc9b2q"/>`,
		"fallback": "ri:home-9-fill",
	});
}

export default Component;
