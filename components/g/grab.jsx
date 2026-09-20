import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sat1gyxaz.css';
import '../../css/g/gqp2xj34g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sat1gyxaz"/><path class="gqp2xj34g"/></g>`,
		"fallback": "pepicons-print:grab",
	});
}

export default Component;
