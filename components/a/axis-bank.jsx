import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izau9c7zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izau9c7zz"/>`,
		"fallback": "thesvg-color:axis-bank",
	});
}

export default Component;
