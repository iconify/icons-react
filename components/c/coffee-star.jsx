import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc1y7ccgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc1y7ccgi"/>`,
		"fallback": "noviair-light:coffee-star",
	});
}

export default Component;
