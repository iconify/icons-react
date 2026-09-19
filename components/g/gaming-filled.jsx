import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j65vee0iz.css';
import '../../css/q/qux_2305e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="j65vee0iz"/><path class="qux_2305e"/>`,
		"fallback": "boxicons:gaming-filled",
	});
}

export default Component;
