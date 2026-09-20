import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxtnnqb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxtnnqb4t"/>`,
		"fallback": "mdi:arrow-left-bold-outline",
	});
}

export default Component;
