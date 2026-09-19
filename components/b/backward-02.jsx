import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/r3275yr0j.css';
import '../../css/u/u31xjebsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="r3275yr0j"/><path class="u31xjebsf"/></g>`,
		"fallback": "hugeicons:backward-02",
	});
}

export default Component;
