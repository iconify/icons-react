import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9pe45rdz.css';
import '../../css/a/a59ck6bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m9pe45rdz"/><path class="a59ck6bwx"/></g>`,
		"fallback": "reicon:gear2-filled",
	});
}

export default Component;
