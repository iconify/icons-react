import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzs9y6jfb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzs9y6jfb"/>`,
		"fallback": "f7:cloud-snow-fill",
	});
}

export default Component;
