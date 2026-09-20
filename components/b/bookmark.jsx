import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji2194_ef.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji2194_ef"/>`,
		"fallback": "system-uicons:bookmark",
	});
}

export default Component;
