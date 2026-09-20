import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3yl1vqij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3yl1vqij"/>`,
		"fallback": "thesvg-color:curl",
	});
}

export default Component;
