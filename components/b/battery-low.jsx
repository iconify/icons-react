import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fadi-2xpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fadi-2xpb"/>`,
		"fallback": "noviair-light:battery-low",
	});
}

export default Component;
