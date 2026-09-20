import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nd4j71d2d.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/j0tyonbdw.css';
import '../../css/k/k0d7q8bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nd4j71d2d"/><g class="mc2zb0bvp"><path class="j0tyonbdw"/><path class="k0d7q8bwx"/></g></g>`,
		"fallback": "solar:documents-bold-duotone",
	});
}

export default Component;
