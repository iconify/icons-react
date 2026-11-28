import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/njw-h6bde.css';
import '../../css/b/b3-simbkr.css';
import '../../css/g/g1ayrbbxm.css';
import '../../css/r/r5esecc_x.css';
import '../../css/o/o4v3tubaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="njw-h6bde"/><path class="b3-simbkr"/><path class="g1ayrbbxm"/><path class="r5esecc_x"/><path class="o4v3tubaw"/></g>`,
		"fallback": "iconaut:chair",
	});
}

export default Component;
