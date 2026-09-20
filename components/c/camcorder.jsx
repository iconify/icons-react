import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-p2oz0-e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-p2oz0-e"/>`,
		"fallback": "picon:camcorder",
	});
}

export default Component;
