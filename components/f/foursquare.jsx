import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzck6r5dg.css';

const viewBox = {"width":368,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzck6r5dg"/>`,
		"fallback": "fa-brands:foursquare",
	});
}

export default Component;
