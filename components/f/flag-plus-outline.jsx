import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ineco_b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ineco_b8t"/>`,
		"fallback": "mdi:flag-plus-outline",
	});
}

export default Component;
