import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0kqobc-l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0kqobc-l"/>`,
		"fallback": "streamline:expand-window-2",
	});
}

export default Component;
