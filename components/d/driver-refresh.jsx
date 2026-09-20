import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gomdih50j.css';
import '../../css/j/j_fmtzfnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gomdih50j"/><path class="j_fmtzfnk"/></g>`,
		"fallback": "reicon:driver-refresh",
	});
}

export default Component;
