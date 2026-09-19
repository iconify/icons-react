import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cehk_qbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cehk_qbid"/>`,
		"fallback": "bxs:calendar-heart",
	});
}

export default Component;
