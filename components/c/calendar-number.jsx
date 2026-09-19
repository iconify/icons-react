import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn_uo6biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn_uo6biq"/>`,
		"fallback": "famicons:calendar-number",
	});
}

export default Component;
