import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrjpsbcaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrjpsbcaz"/>`,
		"fallback": "mdi:fireplace-off",
	});
}

export default Component;
