import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/w2o6zr2ct.css';
import '../../css/l/lmo1p3o7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="w2o6zr2ct"/><path class="lmo1p3o7d"/></g>`,
		"fallback": "lets-icons:done-ring-round",
	});
}

export default Component;
