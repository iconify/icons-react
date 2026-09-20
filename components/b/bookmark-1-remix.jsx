import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n168ynqcy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n168ynqcy"/>`,
		"fallback": "streamline:bookmark-1-remix",
	});
}

export default Component;
