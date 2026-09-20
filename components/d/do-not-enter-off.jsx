import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpdbtwz4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpdbtwz4c"/>`,
		"fallback": "mdi:do-not-enter-off",
	});
}

export default Component;
