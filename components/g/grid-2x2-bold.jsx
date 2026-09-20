import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xk91n3b9j.css';
import '../../css/q/qpl58ra5h.css';
import '../../css/v/v50u05_ah.css';
import '../../css/v/vr5t-cbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xk91n3b9j"/><path class="qpl58ra5h"/><path class="v50u05_ah"/><path class="vr5t-cbds"/></g>`,
		"fallback": "solar:grid-2x2-bold",
	});
}

export default Component;
