import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5wl3gvdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5wl3gvdm"/>`,
		"fallback": "cbi:hot-net",
	});
}

export default Component;
