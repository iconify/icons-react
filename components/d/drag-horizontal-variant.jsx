import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geooavbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geooavbwu"/>`,
		"fallback": "mdi:drag-horizontal-variant",
	});
}

export default Component;
