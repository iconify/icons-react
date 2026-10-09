import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo-gj4um.css';
import '../../css/n/n-h74kx_a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo-gj4um"/><path class="n-h74kx_a"/>`,
		"fallback": "energy-icons:dishwasher-20-bold",
	});
}

export default Component;
