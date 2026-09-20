import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufnwq-rji.css';
import '../../css/v/v5r6fq7ye.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufnwq-rji"/><path class="v5r6fq7ye"/>`,
		"fallback": "streamline-pixel:business-products-cash-shield",
	});
}

export default Component;
