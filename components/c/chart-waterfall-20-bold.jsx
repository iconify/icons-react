import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8r44id8f.css';
import '../../css/n/n-7_zw30i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8r44id8f"/><path class="n-7_zw30i"/>`,
		"fallback": "energy-icons:chart-waterfall-20-bold",
	});
}

export default Component;
