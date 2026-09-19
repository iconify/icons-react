import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikov2ccdo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikov2ccdo"/>`,
		"fallback": "famicons:flag-outline",
	});
}

export default Component;
