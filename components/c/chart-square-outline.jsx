import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ppgcg01jg.css';
import '../../css/j/j3-m1tbbc.css';
import '../../css/c/chqrttdmo.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ppgcg01jg"/><path class="j3-m1tbbc"/><path class="chqrttdmo"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:chart-square-outline",
	});
}

export default Component;
