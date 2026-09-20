import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyoxtgb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyoxtgb0h"/>`,
		"fallback": "mdi:filter-off-outline",
	});
}

export default Component;
