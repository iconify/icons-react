import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4yt86kns.css';
import '../../css/f/fayfq0oyz.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4yt86kns"/><path class="fayfq0oyz"/>`,
		"fallback": "selfhst:domain-watchdog-dark",
	});
}

export default Component;
