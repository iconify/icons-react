import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahs9cdbtz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahs9cdbtz"/>`,
		"fallback": "la:chevron-circle-down",
	});
}

export default Component;
