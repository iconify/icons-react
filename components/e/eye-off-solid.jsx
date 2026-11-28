import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wii-i5b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wii-i5b9e"/>`,
		"fallback": "iconaut:eye-off-solid",
	});
}

export default Component;
