import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaqj09b3e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaqj09b3e"/>`,
		"fallback": "fa6-brands:500px",
	});
}

export default Component;
