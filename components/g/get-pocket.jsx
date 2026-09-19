import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7_s0d79d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7_s0d79d"/>`,
		"fallback": "fa6-brands:get-pocket",
	});
}

export default Component;
