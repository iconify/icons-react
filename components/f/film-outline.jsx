import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1s_y2l-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1s_y2l-h"/>`,
		"fallback": "eva:film-outline",
	});
}

export default Component;
