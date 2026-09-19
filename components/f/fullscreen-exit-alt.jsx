import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do-zxyb4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do-zxyb4h"/>`,
		"fallback": "dashicons:fullscreen-exit-alt",
	});
}

export default Component;
