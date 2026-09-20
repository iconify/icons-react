import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2dg25zkk.css';
import '../../css/x/xvl2oknug.css';
import '../../css/h/h5q-b7bfk.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2dg25zkk"/><path clip-rule="evenodd" class="xvl2oknug"/><path class="h5q-b7bfk"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:face-grinning-circle",
	});
}

export default Component;
