import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvq9_9jgb.css';
import '../../css/p/pgltkub_x.css';
import '../../css/l/l8ivooz9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvq9_9jgb"/><path class="pgltkub_x"/><path class="l8ivooz9n"/></g>`,
		"fallback": "hugeicons:baby-01",
	});
}

export default Component;
