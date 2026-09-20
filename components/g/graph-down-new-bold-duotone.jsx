import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/c/ck5qruk9c.css';
import '../../css/b/by4xxu28b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ck5qruk9c"/><path class="by4xxu28b"/></g>`,
		"fallback": "solar:graph-down-new-bold-duotone",
	});
}

export default Component;
