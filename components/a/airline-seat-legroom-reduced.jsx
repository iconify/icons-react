import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_6xd8_wg.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_6xd8_wg"/>`,
		"fallback": "zmdi:airline-seat-legroom-reduced",
	});
}

export default Component;
