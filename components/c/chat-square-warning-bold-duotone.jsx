import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/c/czn8j8ltd.css';
import '../../css/g/ga24sqbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path class="czn8j8ltd"/><path class="ga24sqbtj"/>`,
		"fallback": "solar:chat-square-warning-bold-duotone",
	});
}

export default Component;
