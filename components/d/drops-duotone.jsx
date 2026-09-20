import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r82adyb7b.css';
import '../../css/h/hj8ko8a3r.css';
import '../../css/t/tf1lulb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r82adyb7b"/><path class="hj8ko8a3r"/><path class="tf1lulb6z"/></g>`,
		"fallback": "reicon:drops-duotone",
	});
}

export default Component;
