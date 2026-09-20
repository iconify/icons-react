import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j19d1tb1x.css';
import '../../css/b/bamoiilsm.css';
import '../../css/g/glthabcxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j19d1tb1x"/><path class="bamoiilsm"/><path class="glthabcxl"/></g>`,
		"fallback": "reicon:box2-duotone",
	});
}

export default Component;
