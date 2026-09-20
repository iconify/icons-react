import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nee_z-b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nee_z-b3k"/>`,
		"fallback": "mingcute:full-moon-fill",
	});
}

export default Component;
