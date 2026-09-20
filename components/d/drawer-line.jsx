import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu0pncc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu0pncc0y"/>`,
		"fallback": "mingcute:drawer-line",
	});
}

export default Component;
