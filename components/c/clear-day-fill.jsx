import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdr_c_a_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdr_c_a_w"/>`,
		"fallback": "si:clear-day-fill",
	});
}

export default Component;
