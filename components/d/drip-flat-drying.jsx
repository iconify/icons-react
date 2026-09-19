import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5dwkvbfp.css';
import '../../css/f/fl69ccc5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5dwkvbfp"/><path class="fl69ccc5j"/></g>`,
		"fallback": "ginetex:drip-flat-drying",
	});
}

export default Component;
