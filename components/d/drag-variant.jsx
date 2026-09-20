import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhy03hbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhy03hbxi"/>`,
		"fallback": "mdi:drag-variant",
	});
}

export default Component;
