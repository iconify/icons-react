import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw8u1vbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw8u1vbft"/>`,
		"fallback": "keyline-icons:globe-plus",
	});
}

export default Component;
