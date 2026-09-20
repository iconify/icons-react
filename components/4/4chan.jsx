import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo0ecjy4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo0ecjy4e"/>`,
		"fallback": "thesvg-color:4chan",
	});
}

export default Component;
