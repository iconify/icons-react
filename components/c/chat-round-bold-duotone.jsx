import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rphlnhcvs.css';
import '../../css/n/n9gq9-o3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rphlnhcvs"/><path class="n9gq9-o3p"/></g>`,
		"fallback": "solar:chat-round-bold-duotone",
	});
}

export default Component;
