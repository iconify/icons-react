import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_6xr2big.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_6xr2big"/>`,
		"fallback": "f7:arrow-left-to-line",
	});
}

export default Component;
