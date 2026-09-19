import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6xhyebnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6xhyebnf"/>`,
		"fallback": "carbon:heat-map-stocks",
	});
}

export default Component;
