import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzqqk7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzqqk7bka"/>`,
		"fallback": "heroicons-outline:cube",
	});
}

export default Component;
