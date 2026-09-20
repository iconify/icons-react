import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5jusru4h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5jusru4h"/>`,
		"fallback": "teenyicons:arrow-outline",
	});
}

export default Component;
