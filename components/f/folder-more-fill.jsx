import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlk0_mb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlk0_mb3d"/>`,
		"fallback": "mingcute:folder-more-fill",
	});
}

export default Component;
