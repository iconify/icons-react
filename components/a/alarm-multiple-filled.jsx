import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce70qkbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce70qkbfb"/>`,
		"fallback": "ix:alarm-multiple-filled",
	});
}

export default Component;
