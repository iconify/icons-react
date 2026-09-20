import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey2r02nhy.css';
import '../../css/w/wmqr3wb9e.css';
import '../../css/z/zse3axbhn.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ey2r02nhy"/><path class="wmqr3wb9e"/><path clip-rule="evenodd" class="zse3axbhn"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circle",
	});
}

export default Component;
