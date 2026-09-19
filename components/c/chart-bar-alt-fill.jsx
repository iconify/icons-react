import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtm3r7b1e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtm3r7b1e"/>`,
		"fallback": "f7:chart-bar-alt-fill",
	});
}

export default Component;
