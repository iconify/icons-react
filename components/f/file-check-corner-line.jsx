import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvg8hob5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvg8hob5o"/>`,
		"fallback": "mingcute:file-check-corner-line",
	});
}

export default Component;
