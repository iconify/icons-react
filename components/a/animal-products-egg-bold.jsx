import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixfou5b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixfou5b7u"/>`,
		"fallback": "streamline-ultimate:animal-products-egg-bold",
	});
}

export default Component;
