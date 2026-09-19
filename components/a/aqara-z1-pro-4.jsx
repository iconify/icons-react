import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z51nb4bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z51nb4bzr"/>`,
		"fallback": "cbi:aqara-z1-pro-4",
	});
}

export default Component;
