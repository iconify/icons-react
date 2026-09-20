import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j39z0vbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j39z0vbnm"/>`,
		"fallback": "thesvg:amd",
	});
}

export default Component;
