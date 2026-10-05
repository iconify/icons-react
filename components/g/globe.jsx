import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ylklwibqq.css';
import '../../css/b/b-p73fn2z.css';
import '../../css/z/zjal2ei2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ylklwibqq"/><path class="b-p73fn2z"/><path class="zjal2ei2n"/></g>`,
		"fallback": "matita:globe",
	});
}

export default Component;
