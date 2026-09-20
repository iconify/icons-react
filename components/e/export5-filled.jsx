import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hq-bvht2o.css';
import '../../css/c/cievdr4ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hq-bvht2o"/><path class="cievdr4ej"/></g>`,
		"fallback": "reicon:export5-filled",
	});
}

export default Component;
