import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9bdhbbao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9bdhbbao"/>`,
		"fallback": "famicons:chevron-expand",
	});
}

export default Component;
