import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bglu54b4i.css';
import '../../css/c/cf6p08jrp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bglu54b4i"/><path class="cf6p08jrp"/></g>`,
		"fallback": "pullo:clock-plus-duotone",
	});
}

export default Component;
