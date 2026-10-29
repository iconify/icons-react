import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjxagrjwy.css';
import '../../css/c/co82vs2aq.css';
import '../../css/p/pljpiabkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjxagrjwy wm-k"/><path class="co82vs2aq wm-k"/><path class="pljpiabkb wm-k"/></g>`,
		"fallback": "withicons-anime:circle-dashed",
	});
}

export default Component;
