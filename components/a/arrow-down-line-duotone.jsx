import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/duf7iubta.css';
import '../../css/g/gp0t1_y6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="duf7iubta"/><path class="gp0t1_y6e"/></g>`,
		"fallback": "solar:arrow-down-line-duotone",
	});
}

export default Component;
