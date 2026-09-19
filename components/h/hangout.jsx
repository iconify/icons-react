import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xv3kysb5u.css';
import '../../css/d/d1xzs4byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="xv3kysb5u"/><path class="d1xzs4byt"/></g>`,
		"fallback": "hugeicons:hangout",
	});
}

export default Component;
