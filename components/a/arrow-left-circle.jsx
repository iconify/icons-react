import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtd784ihb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtd784ihb"/>`,
		"fallback": "mdi-light:arrow-left-circle",
	});
}

export default Component;
