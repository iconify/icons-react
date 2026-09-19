import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx0171-hm.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx0171-hm"/>`,
		"fallback": "zmdi:arrow-forward",
	});
}

export default Component;
