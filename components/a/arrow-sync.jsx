import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcli11bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcli11bgr"/>`,
		"fallback": "proicons:arrow-sync",
	});
}

export default Component;
