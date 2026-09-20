import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9x2wm1fy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9x2wm1fy"/>`,
		"fallback": "picon:apple",
	});
}

export default Component;
