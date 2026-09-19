import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vm072bnhy.css';
import '../../css/s/sgskg5bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vm072bnhy"/><path class="sgskg5bde"/></g>`,
		"fallback": "hugeicons:edit-02",
	});
}

export default Component;
