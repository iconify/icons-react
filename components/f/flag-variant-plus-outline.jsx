import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azme87jwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azme87jwi"/>`,
		"fallback": "mdi:flag-variant-plus-outline",
	});
}

export default Component;
