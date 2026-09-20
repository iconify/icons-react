import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty3omhvwk.css';
import '../../css/r/rjob32btz.css';
import '../../css/q/qhwobdb5c.css';
import '../../css/z/zczqaechp.css';
import '../../css/a/aal2wbblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ty3omhvwk"/><path class="rjob32btz"/><path clip-rule="evenodd" class="qhwobdb5c"/><path class="zczqaechp"/><path class="aal2wbblx"/></g>`,
		"fallback": "reicon:earbuds-check-duotone",
	});
}

export default Component;
