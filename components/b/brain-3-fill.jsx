import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx_sf4b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx_sf4b_n"/>`,
		"fallback": "ri:brain-3-fill",
	});
}

export default Component;
