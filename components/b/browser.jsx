import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yel91y_cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yel91y_cv"/>`,
		"fallback": "hugeicons:browser",
	});
}

export default Component;
