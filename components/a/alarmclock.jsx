import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng3rv4n5r.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng3rv4n5r"/>`,
		"fallback": "whh:alarmclock",
	});
}

export default Component;
