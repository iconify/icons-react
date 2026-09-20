import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubzib6b2j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubzib6b2j"/>`,
		"fallback": "la:exclamation-triangle-solid",
	});
}

export default Component;
