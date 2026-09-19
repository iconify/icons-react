import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_r80-udu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_r80-udu"/>`,
		"fallback": "fa6-solid:circle-dollar-to-slot",
	});
}

export default Component;
