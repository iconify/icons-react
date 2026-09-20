import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3sc48a3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3sc48a3v"/>`,
		"fallback": "reicon:calendar-2-filled",
	});
}

export default Component;
