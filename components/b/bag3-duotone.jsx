import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kcqfi1bod.css';
import '../../css/j/j2g_pdouv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kcqfi1bod"/><path class="j2g_pdouv"/></g>`,
		"fallback": "reicon:bag3-duotone",
	});
}

export default Component;
