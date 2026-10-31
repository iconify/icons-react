import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqjr26qps.css';
import '../../css/b/bus8ftb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cqjr26qps"/><path class="bus8ftb2b"/></g>`,
		"fallback": "coolicons:flame-duotone-round",
	});
}

export default Component;
