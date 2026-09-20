import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqdg-r_-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqdg-r_-w"/>`,
		"fallback": "la:grin-hearts-solid",
	});
}

export default Component;
