import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lz3bvumyc.css';
import '../../css/i/i51s6__iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lz3bvumyc"/><circle class="i51s6__iq"/></g>`,
		"fallback": "bitcoin-icons:camera-outline",
	});
}

export default Component;
