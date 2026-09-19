import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itwu3q08m.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itwu3q08m"/>`,
		"fallback": "zmdi:developer-board",
	});
}

export default Component;
