import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0x9u2gfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0x9u2gfh"/>`,
		"fallback": "iconaut:book-stack-solid",
	});
}

export default Component;
