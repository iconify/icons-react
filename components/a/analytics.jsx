import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhsg9bc_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhsg9bc_z"/>`,
		"fallback": "uis:analytics",
	});
}

export default Component;
