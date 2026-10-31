import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdfwg2bfk.css';
import '../../css/o/odthb3bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdfwg2bfk"/><path class="odthb3bgb"/></g>`,
		"fallback": "coolicons:broom-bulk-round",
	});
}

export default Component;
