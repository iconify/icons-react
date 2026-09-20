import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0e80dbzz.css';
import '../../css/h/hsac7s50m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r0e80dbzz"/><path clip-rule="evenodd" class="hsac7s50m"/></g>`,
		"fallback": "pepicons-print:film-frame",
	});
}

export default Component;
