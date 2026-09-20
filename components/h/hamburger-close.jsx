import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/api0k3bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="api0k3bdp"/>`,
		"fallback": "mdi:hamburger-close",
	});
}

export default Component;
