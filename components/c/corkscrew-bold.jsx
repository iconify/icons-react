import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lijhxtb9h.css';
import '../../css/t/tuomhg4oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lijhxtb9h"/><path class="tuomhg4oj"/></g>`,
		"fallback": "solar:corkscrew-bold",
	});
}

export default Component;
