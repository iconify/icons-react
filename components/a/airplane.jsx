import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d39ld9bkm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d39ld9bkm"/>`,
		"fallback": "pepicons:airplane",
	});
}

export default Component;
