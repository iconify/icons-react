import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5jvbwbyz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5jvbwbyz"/>`,
		"fallback": "dashicons:editor-table",
	});
}

export default Component;
