import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b85g23sbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b85g23sbz"/>`,
		"fallback": "mdi:alert-plus-outline",
	});
}

export default Component;
