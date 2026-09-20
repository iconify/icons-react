import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oasgoj2dk.css';
import '../../css/w/wwhgb4bpx.css';
import '../../css/v/vmt1l92au.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oasgoj2dk"/><path class="wwhgb4bpx"/><path class="vmt1l92au"/></g>`,
		"fallback": "jam:chevrons-circle-up",
	});
}

export default Component;
