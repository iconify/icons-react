import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo7f0lbgb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo7f0lbgb"/>`,
		"fallback": "oi:cog",
	});
}

export default Component;
