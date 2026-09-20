import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaijz-d4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaijz-d4v"/>`,
		"fallback": "subway:calendar-4",
	});
}

export default Component;
