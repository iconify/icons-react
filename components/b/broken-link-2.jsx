import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s19vr9ebe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s19vr9ebe"/>`,
		"fallback": "streamline:broken-link-2",
	});
}

export default Component;
