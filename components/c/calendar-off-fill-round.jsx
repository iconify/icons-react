import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpcdrvr-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpcdrvr-s"/>`,
		"fallback": "coolicons:calendar-off-fill-round",
	});
}

export default Component;
