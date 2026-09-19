import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmw-dsbhg.css';
import '../../css/c/c_wb7v9xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qmw-dsbhg"/><path class="c_wb7v9xi"/></g>`,
		"fallback": "hugeicons:arrow-move-down-right",
	});
}

export default Component;
