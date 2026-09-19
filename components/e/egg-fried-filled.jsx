import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scu8uw9wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scu8uw9wc"/>`,
		"fallback": "boxicons:egg-fried-filled",
	});
}

export default Component;
