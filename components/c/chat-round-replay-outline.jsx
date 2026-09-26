import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pohbymb9n.css';
import '../../css/m/m_goimbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pohbymb9n"/><path clip-rule="evenodd" class="m_goimbsb"/></g>`,
		"fallback": "solar:chat-round-replay-outline",
	});
}

export default Component;
