import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfzvm7b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfzvm7b7b"/>`,
		"fallback": "hugeicons:carousel-horizontal",
	});
}

export default Component;
