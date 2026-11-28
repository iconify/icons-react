import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du-n6bmny.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du-n6bmny"/>`,
		"fallback": "pullo:border-left",
	});
}

export default Component;
