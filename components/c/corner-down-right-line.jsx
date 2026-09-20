import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx3-p01if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx3-p01if"/>`,
		"fallback": "ri:corner-down-right-line",
	});
}

export default Component;
