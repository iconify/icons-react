import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sci_c0bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sci_c0bbk"/>`,
		"fallback": "mdi:dice-d8",
	});
}

export default Component;
