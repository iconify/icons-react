import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whb_-7blr.css';
import '../../css/u/u9sa491sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary whb_-7blr"/><path class="primary u9sa491sb"/></g>`,
		"fallback": "iconaut:ai-agent-duotone",
	});
}

export default Component;
