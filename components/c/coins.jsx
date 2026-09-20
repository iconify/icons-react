import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8ir-dbdg.css';
import '../../css/u/uk36bgb0m.css';
import '../../css/z/zqntybzcz.css';
import '../../css/v/v2ysm4bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w8ir-dbdg"/><path class="uk36bgb0m"/><path class="zqntybzcz"/><path class="v2ysm4bpx"/></g>`,
		"fallback": "pixelarticons:coins",
	});
}

export default Component;
