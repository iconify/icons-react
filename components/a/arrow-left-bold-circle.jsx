import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_cor3_8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_cor3_8h"/>`,
		"fallback": "mdi:arrow-left-bold-circle",
	});
}

export default Component;
