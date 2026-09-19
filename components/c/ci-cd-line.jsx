import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4y--i39e.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4y--i39e"/>`,
		"fallback": "clarity:ci-cd-line",
	});
}

export default Component;
