import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8mrcm4_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8mrcm4_r"/>`,
		"fallback": "cryptocurrency:hns",
	});
}

export default Component;
