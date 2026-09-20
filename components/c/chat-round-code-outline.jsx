import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu9odw3qy.css';
import '../../css/c/cxqjcctvs.css';
import '../../css/a/a44ytmbfp.css';
import '../../css/m/m_goimbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cu9odw3qy"/><path class="cxqjcctvs"/><path class="a44ytmbfp"/><path clip-rule="evenodd" class="m_goimbsb"/></g>`,
		"fallback": "solar:chat-round-code-outline",
	});
}

export default Component;
