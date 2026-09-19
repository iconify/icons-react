import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rcq0ecckh.css';
import '../../css/r/rw6ho_bav.css';
import '../../css/z/zff0n2bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rcq0ecckh"/><path class="rw6ho_bav"/><path class="zff0n2bxy"/></g>`,
		"fallback": "hugeicons:credit-card-accept",
	});
}

export default Component;
