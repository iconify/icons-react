import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d95zj-bto.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d95zj-bto"/>`,
		"fallback": "streamline:battery-empty-1-remix",
	});
}

export default Component;
