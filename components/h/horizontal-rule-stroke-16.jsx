import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5z8pgb7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5z8pgb7j"/>`,
		"fallback": "garden:horizontal-rule-stroke-16",
	});
}

export default Component;
