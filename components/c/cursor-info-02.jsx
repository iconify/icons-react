import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zp0_zabdr.css';
import '../../css/f/fqmhqybuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zp0_zabdr"/><path class="fqmhqybuf"/></g>`,
		"fallback": "hugeicons:cursor-info-02",
	});
}

export default Component;
