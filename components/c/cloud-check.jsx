import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_qa58biz.css';
import '../../css/o/odjrbuxck.css';
import '../../css/b/b6ss8dbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_qa58biz"/><path class="odjrbuxck"/><path class="b6ss8dbul"/></g>`,
		"fallback": "andrsrxn:cloud-check",
	});
}

export default Component;
