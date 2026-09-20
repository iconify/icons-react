import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khre3_bur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khre3_bur"/>`,
		"fallback": "la:expeditedssl",
	});
}

export default Component;
