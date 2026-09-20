import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acu85ycbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acu85ycbz"/>`,
		"fallback": "oui:cross",
	});
}

export default Component;
