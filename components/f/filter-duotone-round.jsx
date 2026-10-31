import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5w31_byx.css';
import '../../css/x/xmytdtbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5w31_byx"/><path class="xmytdtbkm"/></g>`,
		"fallback": "coolicons:filter-duotone-round",
	});
}

export default Component;
