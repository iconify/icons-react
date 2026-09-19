import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn9b5bcba.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn9b5bcba"/>`,
		"fallback": "ps:girl-user",
	});
}

export default Component;
