import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er7ajtbwh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er7ajtbwh"/>`,
		"fallback": "streamline:business-progress-bar-2",
	});
}

export default Component;
