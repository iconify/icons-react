import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk6_68bps.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk6_68bps"/>`,
		"fallback": "f7:arrowtriangle-down-square",
	});
}

export default Component;
