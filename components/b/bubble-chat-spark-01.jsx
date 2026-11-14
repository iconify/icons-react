import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/om48obbxc.css';
import '../../css/c/ce76g-b8x.css';
import '../../css/e/e60a0hbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="om48obbxc"/><path class="ce76g-b8x"/><path class="e60a0hbxb"/></g>`,
		"fallback": "hugeicons:bubble-chat-spark-01",
	});
}

export default Component;
