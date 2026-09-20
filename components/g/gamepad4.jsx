import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8p4ll00f.css';
import '../../css/c/c6tp6_jxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8p4ll00f"/><path clip-rule="evenodd" class="c6tp6_jxz"/></g>`,
		"fallback": "reicon:gamepad4",
	});
}

export default Component;
