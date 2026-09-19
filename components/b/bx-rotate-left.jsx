import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdek8tbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdek8tbrr"/>`,
		"fallback": "bx:bx-rotate-left",
	});
}

export default Component;
