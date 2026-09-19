import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9fxkp7hp.css';

const viewBox = {"width":750,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9fxkp7hp"/>`,
		"fallback": "il:house",
	});
}

export default Component;
