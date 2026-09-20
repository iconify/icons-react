import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eni9_nbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eni9_nbbi"/>`,
		"fallback": "mdi:arrow-top-right-bold-outline",
	});
}

export default Component;
