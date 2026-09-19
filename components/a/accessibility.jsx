import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anec31bwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anec31bwu"/>`,
		"fallback": "carbon:accessibility",
	});
}

export default Component;
