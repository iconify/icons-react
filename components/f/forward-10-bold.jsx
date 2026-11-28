import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw3bu8blb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw3bu8blb"/>`,
		"fallback": "pullo:forward-10-bold",
	});
}

export default Component;
