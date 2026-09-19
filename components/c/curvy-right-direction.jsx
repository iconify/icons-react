import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkq6cdz7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkq6cdz7p"/>`,
		"fallback": "hugeicons:curvy-right-direction",
	});
}

export default Component;
