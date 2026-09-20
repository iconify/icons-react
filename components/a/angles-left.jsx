import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flog68brv.css';
import '../../css/m/mvj1vqu3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="flog68brv"/><path class="mvj1vqu3m"/></g>`,
		"fallback": "reicon:angles-left",
	});
}

export default Component;
