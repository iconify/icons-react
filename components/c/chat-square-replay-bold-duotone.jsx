import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpn6w7ca.css';
import '../../css/y/yr8y3mtib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfpn6w7ca"/><path class="yr8y3mtib"/>`,
		"fallback": "solar:chat-square-replay-bold-duotone",
	});
}

export default Component;
