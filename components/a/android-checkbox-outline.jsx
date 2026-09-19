import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrhqy0n9c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrhqy0n9c"/>`,
		"fallback": "ion:android-checkbox-outline",
	});
}

export default Component;
