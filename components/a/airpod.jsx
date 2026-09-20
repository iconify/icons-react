import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ypx_wqb6b.css';
import '../../css/c/cw70z5cwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ypx_wqb6b"/><path class="cw70z5cwm"/></g>`,
		"fallback": "reicon:airpod",
	});
}

export default Component;
