import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvzym5b5c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvzym5b5c"/>`,
		"fallback": "fa6-brands:cc-apple-pay",
	});
}

export default Component;
