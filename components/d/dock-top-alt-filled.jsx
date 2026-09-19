import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf0y-xe-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf0y-xe-h"/>`,
		"fallback": "boxicons:dock-top-alt-filled",
	});
}

export default Component;
