import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z969ijbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z969ijbtb"/>`,
		"fallback": "iconaut:border-inside-solid",
	});
}

export default Component;
