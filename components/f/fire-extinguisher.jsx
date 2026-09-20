import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9a_qcc_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9a_qcc_m"/>`,
		"fallback": "mdi:fire-extinguisher",
	});
}

export default Component;
