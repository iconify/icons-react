import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chz_ygbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chz_ygbly"/>`,
		"fallback": "mdi:cloud-refresh-variant-outline",
	});
}

export default Component;
