import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk-vr0bug.css';
import '../../css/v/vazhcubhi.css';
import '../../css/z/zz_28pvge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yk-vr0bug"/><path class="vazhcubhi"/><path clip-rule="evenodd" class="zz_28pvge"/></g>`,
		"fallback": "healthicons:blood-b-n-24px",
	});
}

export default Component;
