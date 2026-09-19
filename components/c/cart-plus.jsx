import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neuquygwd.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neuquygwd"/>`,
		"fallback": "fa:cart-plus",
	});
}

export default Component;
