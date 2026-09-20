import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrqen7b1a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrqen7b1a"/>`,
		"fallback": "streamline:filter-2-remix",
	});
}

export default Component;
