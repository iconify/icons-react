import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtue6_b5s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtue6_b5s"/>`,
		"fallback": "fa7-solid:camera-rotate",
	});
}

export default Component;
