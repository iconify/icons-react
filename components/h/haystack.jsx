import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svu7xeb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svu7xeb1r"/>`,
		"fallback": "thesvg-color:haystack",
	});
}

export default Component;
