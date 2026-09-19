import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mxnayikft.css';
import '../../css/l/l688-_boc.css';
import '../../css/r/rw6ho_bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mxnayikft"/><path class="l688-_boc"/><path class="rw6ho_bav"/></g>`,
		"fallback": "hugeicons:credit-card",
	});
}

export default Component;
