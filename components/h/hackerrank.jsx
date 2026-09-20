import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj8x8hb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj8x8hb8z"/>`,
		"fallback": "thesvg-color:hackerrank",
	});
}

export default Component;
