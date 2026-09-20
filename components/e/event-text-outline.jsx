import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6vjzl3ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6vjzl3ay"/>`,
		"fallback": "mdi:event-text-outline",
	});
}

export default Component;
