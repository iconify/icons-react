import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/ey0qnuuke.css';
import '../../css/z/zd5-9ftua.css';
import '../../css/x/xb0ug2b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ey0qnuuke"/><circle class="zd5-9ftua"/><path class="xb0ug2b0k"/></g>`,
		"fallback": "hugeicons:hockey",
	});
}

export default Component;
