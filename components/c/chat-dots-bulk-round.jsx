import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lz_h6ew-s.css';
import '../../css/s/s4_f-bc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lz_h6ew-s"/><path class="s4_f-bc2n"/></g>`,
		"fallback": "coolicons:chat-dots-bulk-round",
	});
}

export default Component;
