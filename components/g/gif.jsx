import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1o8dn6qa.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1o8dn6qa"/>`,
		"fallback": "zmdi:gif",
	});
}

export default Component;
