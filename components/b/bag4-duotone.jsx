import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yeus-7b3d.css';
import '../../css/b/bac0--bit.css';
import '../../css/a/arl-0jb6o.css';
import '../../css/s/svbwzm6_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yeus-7b3d"/><circle class="bac0--bit"/><circle class="arl-0jb6o"/><path class="svbwzm6_b"/></g>`,
		"fallback": "reicon:bag4-duotone",
	});
}

export default Component;
