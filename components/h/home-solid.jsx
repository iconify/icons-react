import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6e8nvbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6e8nvbnr"/>`,
		"fallback": "iconaut:home-solid",
	});
}

export default Component;
