import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne9x3aczl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne9x3aczl"/>`,
		"fallback": "proicons:arrow-up",
	});
}

export default Component;
