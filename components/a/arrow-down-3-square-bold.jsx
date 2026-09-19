import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynum6zy-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynum6zy-z"/>`,
		"fallback": "iconamoon:arrow-down-3-square-bold",
	});
}

export default Component;
