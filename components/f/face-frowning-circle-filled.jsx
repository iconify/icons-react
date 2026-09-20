import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/z/z2dg25zkk.css';
import '../../css/h/h5q-b7bfk.css';
import '../../css/c/c8_hbywkl.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="z2dg25zkk"/><path class="h5q-b7bfk"/><path clip-rule="evenodd" class="c8_hbywkl"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:face-frowning-circle-filled",
	});
}

export default Component;
