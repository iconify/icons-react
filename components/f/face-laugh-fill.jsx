import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6900q75u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6900q75u"/>`,
		"fallback": "keyline-icons:face-laugh-fill",
	});
}

export default Component;
