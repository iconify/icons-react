import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk7shod1f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk7shod1f"/>`,
		"fallback": "oi:grid-two-up",
	});
}

export default Component;
