import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-c2tob9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-c2tob9c"/>`,
		"fallback": "solar:archive-outline",
	});
}

export default Component;
