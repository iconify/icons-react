import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8x-36bon.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8x-36bon"/>`,
		"fallback": "fa6-brands:ello",
	});
}

export default Component;
