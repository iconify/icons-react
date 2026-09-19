import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy34s966k.css';
import '../../css/d/dti_lwbpo.css';
import '../../css/r/rultu2b4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dy34s966k"/><path class="dti_lwbpo"/><path clip-rule="evenodd" class="rultu2b4m"/></g>`,
		"fallback": "pepicons:flower-bud-print",
	});
}

export default Component;
