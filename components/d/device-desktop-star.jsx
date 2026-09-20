import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa5wd-b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa5wd-b-y"/>`,
		"fallback": "tabler:device-desktop-star",
	});
}

export default Component;
