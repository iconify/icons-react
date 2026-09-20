import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xddbcbb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xddbcbb0z"/>`,
		"fallback": "keyline-icons:calendar-arrow-right-sharp",
	});
}

export default Component;
