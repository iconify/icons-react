import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8g3p2xah.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8g3p2xah"/>`,
		"fallback": "picon:blame",
	});
}

export default Component;
