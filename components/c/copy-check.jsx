import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frjtak0tr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frjtak0tr"/>`,
		"fallback": "pullo:copy-check",
	});
}

export default Component;
