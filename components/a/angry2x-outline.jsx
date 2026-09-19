import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jd5gxhl_b.css';
import '../../css/r/r26yq4b_e.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jd5gxhl_b"/><path class="r26yq4b_e"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:angry2x-outline",
	});
}

export default Component;
