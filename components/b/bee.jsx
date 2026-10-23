import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x08xerbma.css';
import '../../css/x/xebng-s0v.css';
import '../../css/w/wxzhspb6c.css';
import '../../css/n/n3q464hzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x08xerbma"/><path class="xebng-s0v"/><path class="wxzhspb6c"/><path class="n3q464hzm"/></g>`,
		"fallback": "andrsrxn:bee",
	});
}

export default Component;
