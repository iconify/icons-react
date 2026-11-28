import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1x3a2bvt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1x3a2bvt"/>`,
		"fallback": "pullo:bookmark-simple-slash-fill",
	});
}

export default Component;
