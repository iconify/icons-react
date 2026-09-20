import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7_v082hu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7_v082hu"/>`,
		"fallback": "roentgen:government",
	});
}

export default Component;
