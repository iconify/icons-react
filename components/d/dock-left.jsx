import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-t9hbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-t9hbif"/>`,
		"fallback": "mdi:dock-left",
	});
}

export default Component;
