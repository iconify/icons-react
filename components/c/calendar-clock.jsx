import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/loml9rw7n.css';
import '../../css/y/yfausol3d.css';
import '../../css/b/bk7s47aiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="loml9rw7n"/><path class="yfausol3d"/><path class="bk7s47aiv"/></g>`,
		"fallback": "hugeicons:calendar-clock",
	});
}

export default Component;
