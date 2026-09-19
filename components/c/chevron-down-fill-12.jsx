import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7c05bzx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv7c05bzx"/>`,
		"fallback": "garden:chevron-down-fill-12",
	});
}

export default Component;
