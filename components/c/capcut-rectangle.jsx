import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lov_webcn.css';
import '../../css/b/b1q3_cb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lov_webcn"/><path class="b1q3_cb2d"/></g>`,
		"fallback": "hugeicons:capcut-rectangle",
	});
}

export default Component;
