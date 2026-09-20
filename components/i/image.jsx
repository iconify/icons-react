import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q05hzccws.css';
import '../../css/a/ahcdw0d0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q05hzccws"/><path class="ahcdw0d0m"/></g>`,
		"fallback": "pixelarticons:image",
	});
}

export default Component;
