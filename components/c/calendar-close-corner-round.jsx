import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwh_5cbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwh_5cbps"/>`,
		"fallback": "coolicons:calendar-close-corner-round",
	});
}

export default Component;
