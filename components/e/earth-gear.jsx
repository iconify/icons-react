import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntud26bad.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntud26bad"/>`,
		"fallback": "gis:earth-gear",
	});
}

export default Component;
