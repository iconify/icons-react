import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs-xbhv-s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs-xbhv-s"/>`,
		"fallback": "fa6-solid:ice-cream",
	});
}

export default Component;
