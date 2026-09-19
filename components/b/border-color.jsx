import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_k6153t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7_k6153t"/>`,
		"fallback": "zmdi:border-color",
	});
}

export default Component;
