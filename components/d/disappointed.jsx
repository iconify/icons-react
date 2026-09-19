import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fem986b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fem986b2e"/>`,
		"fallback": "fe:disappointed",
	});
}

export default Component;
