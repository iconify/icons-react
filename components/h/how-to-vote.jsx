import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjrp1_b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjrp1_b8z"/>`,
		"fallback": "mdi:how-to-vote",
	});
}

export default Component;
