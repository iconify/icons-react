import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uug-36bdh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uug-36bdh"/>`,
		"fallback": "fa6-brands:figma",
	});
}

export default Component;
