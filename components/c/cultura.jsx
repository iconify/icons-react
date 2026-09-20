import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu1cwab2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu1cwab2e"/>`,
		"fallback": "thesvg-color:cultura",
	});
}

export default Component;
