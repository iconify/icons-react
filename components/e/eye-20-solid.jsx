import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnq0rg8hp.css';
import '../../css/x/x8cplgb-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hnq0rg8hp"/><path clip-rule="evenodd" class="x8cplgb-w"/></g>`,
		"fallback": "heroicons:eye-20-solid",
	});
}

export default Component;
