import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3jp_r57s.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3jp_r57s"/>`,
		"fallback": "fa:clone",
	});
}

export default Component;
