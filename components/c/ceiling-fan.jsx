import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow64u_brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow64u_brv"/>`,
		"fallback": "mdi:ceiling-fan",
	});
}

export default Component;
