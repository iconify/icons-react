import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky0dkjbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky0dkjbft"/>`,
		"fallback": "griddy-icons:airplane-alt-01",
	});
}

export default Component;
