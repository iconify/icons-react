import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf5g0ffhl.css';
import '../../css/h/huv6-s8fz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf5g0ffhl"/><path class="huv6-s8fz"/>`,
		"fallback": "energy-icons:gas-detector-20",
	});
}

export default Component;
