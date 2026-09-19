import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li-6-8xig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li-6-8xig"/>`,
		"fallback": "fa-solid:backward",
	});
}

export default Component;
