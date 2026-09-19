import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yc3g09_ey.css';
import '../../css/r/r7kf4-bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yc3g09_ey"/><path class="r7kf4-bgn"/></g>`,
		"fallback": "iconoir:codepen",
	});
}

export default Component;
