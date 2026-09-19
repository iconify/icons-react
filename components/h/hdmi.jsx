import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgcub9bay.css';
import '../../css/l/l1t_ahb_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bgcub9bay"/><path class="l1t_ahb_b"/></g>`,
		"fallback": "bi:hdmi",
	});
}

export default Component;
