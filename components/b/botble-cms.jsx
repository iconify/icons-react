import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j969lxbij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j969lxbij"/>`,
		"fallback": "thesvg-color:botble-cms",
	});
}

export default Component;
