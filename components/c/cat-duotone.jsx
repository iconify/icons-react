import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgmbprb_y.css';
import '../../css/r/r33_akmmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sgmbprb_y"/><path class="primary r33_akmmf"/></g>`,
		"fallback": "iconaut:cat-duotone",
	});
}

export default Component;
