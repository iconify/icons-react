import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdtnwqcof.css';
import '../../css/b/bd_l30gnb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdtnwqcof"/><path class="bd_l30gnb"/></g>`,
		"fallback": "pullo:bring-to-front-duotone",
	});
}

export default Component;
