import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwiyn8_gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwiyn8_gh"/>`,
		"fallback": "mdi-light:cart",
	});
}

export default Component;
