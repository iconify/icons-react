import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az1dy05bx.css';
import '../../css/x/xh-xqdv8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az1dy05bx"/><path class="xh-xqdv8t"/>`,
		"fallback": "energy-icons:arrow-down-left-20-bold",
	});
}

export default Component;
