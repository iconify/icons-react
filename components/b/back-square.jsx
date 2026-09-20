import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/d/dxbcz6bxk.css';
import '../../css/r/r5yaqdezc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="dxbcz6bxk"/><path class="r5yaqdezc"/></g>`,
		"fallback": "reicon:back-square",
	});
}

export default Component;
