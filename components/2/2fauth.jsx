import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvk2zxd-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvk2zxd-h"/>`,
		"fallback": "selfhst:2fauth",
	});
}

export default Component;
