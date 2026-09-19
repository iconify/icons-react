import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bs_f05b1d.css';
import '../../css/w/wy_rp5exx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bs_f05b1d"/><path class="wy_rp5exx"/></g>`,
		"fallback": "heroicons:bolt-slash-20-solid",
	});
}

export default Component;
