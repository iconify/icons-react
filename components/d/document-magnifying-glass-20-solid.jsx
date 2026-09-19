import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1x_shbfr.css';
import '../../css/h/hrclzsfpv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1x_shbfr"/><path clip-rule="evenodd" class="hrclzsfpv"/></g>`,
		"fallback": "heroicons:document-magnifying-glass-20-solid",
	});
}

export default Component;
