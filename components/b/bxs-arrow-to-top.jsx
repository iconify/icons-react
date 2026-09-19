import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo68l_7-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo68l_7-h"/>`,
		"fallback": "bx:bxs-arrow-to-top",
	});
}

export default Component;
