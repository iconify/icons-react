import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eejtv1vkx.css';
import '../../css/m/m6_vombxc.css';
import '../../css/l/lancknb1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eejtv1vkx"/><path class="m6_vombxc"/><path class="lancknb1t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:factory-worker",
	});
}

export default Component;
