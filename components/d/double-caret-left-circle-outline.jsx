import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubb0mibui.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubb0mibui"/>`,
		"fallback": "teenyicons:double-caret-left-circle-outline",
	});
}

export default Component;
