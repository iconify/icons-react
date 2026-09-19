import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tb__dlbxe.css';
import '../../css/z/zrbkog8eg.css';
import '../../css/h/hzvkpy4xn.css';
import '../../css/l/lqt7szbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tb__dlbxe"/><path class="zrbkog8eg"/><path class="hzvkpy4xn"/><path class="lqt7szbcr"/></g>`,
		"fallback": "hugeicons:birthday-cake",
	});
}

export default Component;
