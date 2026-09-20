import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpd_f5y1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpd_f5y1h"/>`,
		"fallback": "ri:focus-3-line",
	});
}

export default Component;
