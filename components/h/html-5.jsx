import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yc_xac4xc.css';
import '../../css/n/nv37vxbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yc_xac4xc"/><path class="nv37vxbut"/></g>`,
		"fallback": "hugeicons:html-5",
	});
}

export default Component;
