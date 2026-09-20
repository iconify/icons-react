import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry89rcb0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry89rcb0e"/>`,
		"fallback": "ix:grid-pen",
	});
}

export default Component;
