import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfjcihf4q.css';
import '../../css/g/g0ey757vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sfjcihf4q"/><path class="g0ey757vk"/></g>`,
		"fallback": "coolicons:gallery-bulk-round",
	});
}

export default Component;
