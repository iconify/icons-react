import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylax2cbyb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylax2cbyb"/>`,
		"fallback": "memory:border-top-right",
	});
}

export default Component;
