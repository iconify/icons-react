import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f61_a6dzr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f61_a6dzr"/>`,
		"fallback": "bi:bank",
	});
}

export default Component;
