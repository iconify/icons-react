import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl7ngiv_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl7ngiv_y"/>`,
		"fallback": "iconamoon:enter-light",
	});
}

export default Component;
