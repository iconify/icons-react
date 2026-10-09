import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iams6mbdr.css';
import '../../css/k/khkze9bls.css';
import '../../css/t/t9laxhuoy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iams6mbdr"/><path class="khkze9bls"/><path class="t9laxhuoy"/>`,
		"fallback": "energy-icons:electric-ferry-20-bold",
	});
}

export default Component;
