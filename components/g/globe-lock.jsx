import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov_fxbbjg.css';
import '../../css/d/d2vlh_j6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ov_fxbbjg"/><path class="d2vlh_j6r"/></g>`,
		"fallback": "hugeicons:globe-lock",
	});
}

export default Component;
