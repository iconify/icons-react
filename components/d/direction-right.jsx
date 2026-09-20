import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ck89bsa.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9ck89bsa"/>`,
		"fallback": "wi:direction-right",
	});
}

export default Component;
