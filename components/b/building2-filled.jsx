import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdq2_d3jn.css';
import '../../css/r/r7ra-z0fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdq2_d3jn"/><path class="r7ra-z0fu"/></g>`,
		"fallback": "reicon:building2-filled",
	});
}

export default Component;
