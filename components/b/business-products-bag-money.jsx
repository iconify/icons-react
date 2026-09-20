import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmsf81b4h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmsf81b4h"/>`,
		"fallback": "streamline-pixel:business-products-bag-money",
	});
}

export default Component;
