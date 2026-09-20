import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqqs8_lie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqqs8_lie"/>`,
		"fallback": "lets-icons:critical-light",
	});
}

export default Component;
