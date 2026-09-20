import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdv9-dbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdv9-dbgp"/>`,
		"fallback": "mdi:drop-check-outline",
	});
}

export default Component;
