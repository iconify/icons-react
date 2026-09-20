import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e95aribsc.css';
import '../../css/u/uaa9tzbcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e95aribsc"/><path class="uaa9tzbcp"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-ticket",
	});
}

export default Component;
