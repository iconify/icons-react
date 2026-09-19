import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6u59sxkw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6u59sxkw"/>`,
		"fallback": "carbon:arrow-shift-down",
	});
}

export default Component;
