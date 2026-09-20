import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaol0eb1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaol0eb1k"/>`,
		"fallback": "la:houzz",
	});
}

export default Component;
