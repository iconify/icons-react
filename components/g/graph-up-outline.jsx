import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4e2oqbkw.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4e2oqbkw"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:graph-up-outline",
	});
}

export default Component;
