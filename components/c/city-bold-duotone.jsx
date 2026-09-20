import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4flpqb4t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rt40puy8t.css';
import '../../css/m/m8ow94bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w4flpqb4t"/><g class="mc2zb0bvp"><path class="rt40puy8t"/><path class="m8ow94bvr"/></g></g>`,
		"fallback": "solar:city-bold-duotone",
	});
}

export default Component;
