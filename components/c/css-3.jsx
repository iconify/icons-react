import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6c0khbqi.css';
import '../../css/y/ydxs5zd1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y6c0khbqi"/><path class="ydxs5zd1q"/></g>`,
		"fallback": "hugeicons:css-3",
	});
}

export default Component;
