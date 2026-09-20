import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhq96o62y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhq96o62y"/>`,
		"fallback": "la:assistive-listening-systems",
	});
}

export default Component;
