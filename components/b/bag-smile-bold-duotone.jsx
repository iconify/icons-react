import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewzmyackw.css';
import '../../css/g/gkyuuubsb.css';
import '../../css/a/as3d_z4zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewzmyackw"/><path class="gkyuuubsb"/><path class="as3d_z4zk"/></g>`,
		"fallback": "solar:bag-smile-bold-duotone",
	});
}

export default Component;
