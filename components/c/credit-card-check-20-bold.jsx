import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z53z8i3hj.css';
import '../../css/y/yd1_zhbpd.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z53z8i3hj"/><path class="yd1_zhbpd"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:credit-card-check-20-bold",
	});
}

export default Component;
