import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x7dwrjdbf.css';
import '../../css/d/dv5yto6iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x7dwrjdbf"/><path class="dv5yto6iz"/></g>`,
		"fallback": "coolicons:award-bulk-round",
	});
}

export default Component;
