import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb96ptbmh.css';
import '../../css/n/n_yelj1ty.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb96ptbmh"/><path class="n_yelj1ty"/>`,
		"fallback": "energy-icons:gps-20-bold",
	});
}

export default Component;
