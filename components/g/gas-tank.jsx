import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtl23bc2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtl23bc2p"/>`,
		"fallback": "mdi:gas-tank",
	});
}

export default Component;
