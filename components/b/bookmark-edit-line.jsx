import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_y8nv_ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_y8nv_ip"/>`,
		"fallback": "mingcute:bookmark-edit-line",
	});
}

export default Component;
