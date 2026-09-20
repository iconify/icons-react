import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmwo-9w_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmwo-9w_a"/>`,
		"fallback": "mdi:archive-check",
	});
}

export default Component;
