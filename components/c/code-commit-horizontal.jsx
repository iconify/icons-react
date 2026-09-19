import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvvoo3bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvvoo3bmi"/>`,
		"fallback": "griddy-icons:code-commit-horizontal",
	});
}

export default Component;
