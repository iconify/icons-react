import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5adbjbyj.css';
import '../../css/w/wcd-b4elb.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5adbjbyj"/><path class="wcd-b4elb"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:generator-check-20-bold",
	});
}

export default Component;
