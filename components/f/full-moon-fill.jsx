import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbu34-6ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbu34-6ve"/>`,
		"fallback": "mingcute:full-moon-fill",
	});
}

export default Component;
