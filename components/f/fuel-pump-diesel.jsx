import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqh2szbpr.css';
import '../../css/s/six5ppp_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kqh2szbpr"/><path class="six5ppp_p"/></g>`,
		"fallback": "bi:fuel-pump-diesel",
	});
}

export default Component;
