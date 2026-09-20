import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-pn6fbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-pn6fbgi"/>`,
		"fallback": "mdi:human-female-dance",
	});
}

export default Component;
