import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q439mj5gp.css';
import '../../css/u/uosm7i6uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q439mj5gp"/><path class="uosm7i6uf"/></g>`,
		"fallback": "coolicons:arrow-big-left-duotone-round",
	});
}

export default Component;
