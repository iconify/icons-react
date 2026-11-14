import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lei3g-6cs.css';
import '../../css/s/s8ev7acna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lei3g-6cs"/><path class="s8ev7acna"/></g>`,
		"fallback": "hugeicons:call-ringing-04",
	});
}

export default Component;
