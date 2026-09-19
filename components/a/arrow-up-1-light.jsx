import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4qlwkbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4qlwkbor"/>`,
		"fallback": "iconamoon:arrow-up-1-light",
	});
}

export default Component;
