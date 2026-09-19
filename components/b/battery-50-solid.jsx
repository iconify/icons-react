import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zur5ll5qw.css';
import '../../css/f/fz9sh_r_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zur5ll5qw"/><path clip-rule="evenodd" class="fz9sh_r_q"/></g>`,
		"fallback": "heroicons:battery-50-solid",
	});
}

export default Component;
