import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x57s-vb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x57s-vb4k"/>`,
		"fallback": "token:bist",
	});
}

export default Component;
