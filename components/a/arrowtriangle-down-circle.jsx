import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu9wddprx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu9wddprx"/>`,
		"fallback": "f7:arrowtriangle-down-circle",
	});
}

export default Component;
