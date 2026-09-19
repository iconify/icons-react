import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th7ll35oe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th7ll35oe"/>`,
		"fallback": "carbon:dew-point-filled",
	});
}

export default Component;
