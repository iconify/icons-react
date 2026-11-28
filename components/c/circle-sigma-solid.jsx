import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0b00-bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0b00-bar"/>`,
		"fallback": "iconaut:circle-sigma-solid",
	});
}

export default Component;
