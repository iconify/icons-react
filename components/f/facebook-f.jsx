import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy8y-8xfl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy8y-8xfl"/>`,
		"fallback": "cib:facebook-f",
	});
}

export default Component;
