import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/etrfmvbak.css';
import '../../css/g/gsjdp6b8k.css';
import '../../css/n/n6qk4ubzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="etrfmvbak"/><path class="gsjdp6b8k"/><path class="n6qk4ubzk"/></g>`,
		"fallback": "hugeicons:drag-right-02",
	});
}

export default Component;
