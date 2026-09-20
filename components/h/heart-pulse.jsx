import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb32160sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb32160sz"/>`,
		"fallback": "mdi:heart-pulse",
	});
}

export default Component;
