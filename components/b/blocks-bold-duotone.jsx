import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/q3zld5bik.css';
import '../../css/m/mbe0glb8u.css';
import '../../css/s/szmqvptdx.css';
import '../../css/z/zjt4gb9yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="q3zld5bik"/><path class="mbe0glb8u"/><path class="szmqvptdx"/></g><path class="zjt4gb9yw"/></g>`,
		"fallback": "solar:blocks-bold-duotone",
	});
}

export default Component;
