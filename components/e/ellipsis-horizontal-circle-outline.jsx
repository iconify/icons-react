import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od72l_b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od72l_b0n"/>`,
		"fallback": "mdi:ellipsis-horizontal-circle-outline",
	});
}

export default Component;
