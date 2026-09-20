import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od07oia4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od07oia4u"/>`,
		"fallback": "la:hand-scissors-solid",
	});
}

export default Component;
