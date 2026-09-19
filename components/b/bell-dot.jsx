import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e5opmsb2q.css';
import '../../css/k/k5cl12b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e5opmsb2q"/><path class="k5cl12b0k"/></g>`,
		"fallback": "hugeicons:bell-dot",
	});
}

export default Component;
