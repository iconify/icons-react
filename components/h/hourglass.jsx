import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvpw1ac4i.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvpw1ac4i"/>`,
		"fallback": "ps:hourglass",
	});
}

export default Component;
