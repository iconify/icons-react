import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8d5wzodb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8d5wzodb"/>`,
		"fallback": "noviair-light:coffee-check",
	});
}

export default Component;
