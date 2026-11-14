import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veyi8bc9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veyi8bc9h"/>`,
		"fallback": "hugeicons:chevron-double-close",
	});
}

export default Component;
