import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c20fdyblc.css';
import '../../css/c/cxzxezbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c20fdyblc"/><path class="cxzxezbns"/></g>`,
		"fallback": "solar:check-read-line-duotone",
	});
}

export default Component;
