import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pu92wlf_c.css';
import '../../css/x/xwjff6npa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pu92wlf_c"/><path clip-rule="evenodd" class="xwjff6npa"/></g>`,
		"fallback": "reicon:dislike-duotone",
	});
}

export default Component;
