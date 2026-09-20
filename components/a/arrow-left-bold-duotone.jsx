import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erf2o0bbg.css';
import '../../css/q/qgd4ikm4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="erf2o0bbg"/><path class="qgd4ikm4w"/></g>`,
		"fallback": "solar:arrow-left-bold-duotone",
	});
}

export default Component;
