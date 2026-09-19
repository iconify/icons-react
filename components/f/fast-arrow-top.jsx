import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz7wivbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz7wivbbh"/>`,
		"fallback": "iconoir:fast-arrow-top",
	});
}

export default Component;
