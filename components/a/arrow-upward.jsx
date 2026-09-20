import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by6-rl-ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by6-rl-ym"/>`,
		"fallback": "mdi:arrow-upward",
	});
}

export default Component;
