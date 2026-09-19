import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdlby1xhw.css';
import '../../css/p/p_ybfsbym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdlby1xhw"/><path class="p_ybfsbym"/></g>`,
		"fallback": "bi:device-ssd-fill",
	});
}

export default Component;
