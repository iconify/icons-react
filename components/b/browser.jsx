import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f897x_j9p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f897x_j9p"/>`,
		"fallback": "oi:browser",
	});
}

export default Component;
