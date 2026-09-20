import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq8je227t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq8je227t"/>`,
		"fallback": "mdi:battery-70",
	});
}

export default Component;
