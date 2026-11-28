import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7o99qb7p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7o99qb7p"/>`,
		"fallback": "pullo:envelope-x-light",
	});
}

export default Component;
