import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pj3o0mbiu.css';
import '../../css/x/x2h4g4vyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pj3o0mbiu"/><path class="x2h4g4vyz"/></g>`,
		"fallback": "coolicons:eye-bulk-round",
	});
}

export default Component;
