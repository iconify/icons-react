import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-4h1bclr.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-4h1bclr"/>`,
		"fallback": "vs:face-like",
	});
}

export default Component;
