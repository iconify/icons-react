import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvb0yvbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvb0yvbbe"/>`,
		"fallback": "mingcute:fire-extinguisher-line",
	});
}

export default Component;
