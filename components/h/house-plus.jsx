import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lui1zkh6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lui1zkh6t"/>`,
		"fallback": "hugeicons:house-plus",
	});
}

export default Component;
