import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_hx_ibsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_hx_ibsf"/>`,
		"fallback": "lucide-extended:arrow-big-down-dash-filled",
	});
}

export default Component;
