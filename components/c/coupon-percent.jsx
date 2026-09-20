import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw1ki3rjb.css';
import '../../css/u/u_su17buu.css';
import '../../css/z/zfvkw5uxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uw1ki3rjb"/><path class="u_su17buu"/><path class="zfvkw5uxn"/></g>`,
		"fallback": "streamline-freehand:coupon-percent",
	});
}

export default Component;
