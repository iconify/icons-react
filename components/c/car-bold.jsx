import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0pcr2bht.css';
import '../../css/c/cx5-x2bsy.css';
import '../../css/v/v09ng3b3s.css';
import '../../css/n/nrbg57yne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0pcr2bht"/><path class="cx5-x2bsy"/><path clip-rule="evenodd" class="v09ng3b3s"/><path class="nrbg57yne"/></g>`,
		"fallback": "solar:car-bold",
	});
}

export default Component;
