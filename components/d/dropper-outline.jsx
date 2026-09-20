import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e57n2cbti.css';
import '../../css/c/c1yjl09dx.css';
import '../../css/s/sl6xxfjdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e57n2cbti"/><path class="c1yjl09dx"/><path clip-rule="evenodd" class="sl6xxfjdd"/></g>`,
		"fallback": "solar:dropper-outline",
	});
}

export default Component;
