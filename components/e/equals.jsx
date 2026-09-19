import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7id7ozam.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7id7ozam"/>`,
		"fallback": "fa-solid:equals",
	});
}

export default Component;
