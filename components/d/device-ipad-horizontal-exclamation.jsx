import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds4ebdc8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds4ebdc8u"/>`,
		"fallback": "tabler:device-ipad-horizontal-exclamation",
	});
}

export default Component;
