import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/a/agockdsbo.css';
import '../../css/b/bc2j0t3dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="agockdsbo"/><path class="bc2j0t3dg"/></g>`,
		"fallback": "solar:chat-round-line-line-duotone",
	});
}

export default Component;
