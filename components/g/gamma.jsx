import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4spl7m6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4spl7m6u"/>`,
		"fallback": "mdi:gamma",
	});
}

export default Component;
