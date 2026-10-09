import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awwur6tzl.css';
import '../../css/l/l9ao81bdv.css';
import '../../css/x/xfmnipbdx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awwur6tzl"/><path class="l9ao81bdv"/><path class="xfmnipbdx"/>`,
		"fallback": "energy-icons:ev-charger-home-20-bold",
	});
}

export default Component;
