import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7w-e1i8e.css';
import '../../css/k/khuf8xa_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7w-e1i8e"/><path class="khuf8xa_t"/>`,
		"fallback": "streamline-pixel:business-products-wallet-money",
	});
}

export default Component;
