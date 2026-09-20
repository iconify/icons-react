import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvzst7big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvzst7big"/>`,
		"fallback": "thesvg:actual-budget",
	});
}

export default Component;
