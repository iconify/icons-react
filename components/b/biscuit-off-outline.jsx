import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_qj3_bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_qj3_bja"/>`,
		"fallback": "mdi:biscuit-off-outline",
	});
}

export default Component;
