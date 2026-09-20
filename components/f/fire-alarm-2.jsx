import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne7-robio.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne7-robio"/>`,
		"fallback": "streamline:fire-alarm-2",
	});
}

export default Component;
