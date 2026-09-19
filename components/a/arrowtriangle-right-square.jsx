import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4vt97b1n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4vt97b1n"/>`,
		"fallback": "f7:arrowtriangle-right-square",
	});
}

export default Component;
