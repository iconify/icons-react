import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cou-7vbaz.css';
import '../../css/h/hbbd_v5xz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cou-7vbaz"/><path clip-rule="evenodd" class="hbbd_v5xz"/></g>`,
		"fallback": "heroicons:eye-16-solid",
	});
}

export default Component;
