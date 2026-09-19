import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y47zebiup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y47zebiup"/>`,
		"fallback": "iconamoon:arrow-right-3-square-bold",
	});
}

export default Component;
