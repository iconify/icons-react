import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71cscbhf.css';

const viewBox = {"width":128,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k71cscbhf"/>`,
		"fallback": "fad:digital-colon",
	});
}

export default Component;
