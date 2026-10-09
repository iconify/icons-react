import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/k/ki4_wwbbd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="ki4_wwbbd"/>`,
		"fallback": "energy-icons:columns-20-bold",
	});
}

export default Component;
