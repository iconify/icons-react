import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xoi8enb4l.css';
import '../../css/d/dux539s4k.css';
import '../../css/z/zl063ub9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xoi8enb4l"/><path class="dux539s4k"/><path class="zl063ub9s"/></g>`,
		"fallback": "solar:crop-linear",
	});
}

export default Component;
