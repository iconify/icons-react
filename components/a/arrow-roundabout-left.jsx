import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yb2cpe_ck.css';
import '../../css/r/r99rrlbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yb2cpe_ck"/><path class="r99rrlbkm"/></g>`,
		"fallback": "tabler:arrow-roundabout-left",
	});
}

export default Component;
