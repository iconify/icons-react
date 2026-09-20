import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8ljxq3-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8ljxq3-z"/>`,
		"fallback": "thesvg-color:anta",
	});
}

export default Component;
