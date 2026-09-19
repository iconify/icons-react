import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz-k7ho-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz-k7ho-z"/>`,
		"fallback": "hugeicons:hexagon-01",
	});
}

export default Component;
