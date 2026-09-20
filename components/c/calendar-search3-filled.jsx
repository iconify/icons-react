import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gisz0600z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gisz0600z"/>`,
		"fallback": "reicon:calendar-search3-filled",
	});
}

export default Component;
