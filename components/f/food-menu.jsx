import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niijr9bav.css';
import '../../css/p/pv8augtve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niijr9bav"/><path class="pv8augtve"/>`,
		"fallback": "boxicons:food-menu",
	});
}

export default Component;
