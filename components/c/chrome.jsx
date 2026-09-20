import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or9gezb3m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or9gezb3m"/>`,
		"fallback": "la:chrome",
	});
}

export default Component;
