import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz8egfbsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz8egfbsi"/>`,
		"fallback": "roentgen:bag-with-percent",
	});
}

export default Component;
