import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl4o3acey.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl4o3acey"/>`,
		"fallback": "whh:golf",
	});
}

export default Component;
