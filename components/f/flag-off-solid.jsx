import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-c0-2jci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-c0-2jci"/>`,
		"fallback": "iconaut:flag-off-solid",
	});
}

export default Component;
