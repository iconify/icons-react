import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy88w0bxg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy88w0bxg"/>`,
		"fallback": "picon:battleaxe",
	});
}

export default Component;
