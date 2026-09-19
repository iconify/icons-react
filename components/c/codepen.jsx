import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jy69amb2v.css';
import '../../css/u/umu3d-h-o.css';
import '../../css/z/zlsq9ybxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jy69amb2v"/><path class="umu3d-h-o"/><path class="zlsq9ybxs"/></g>`,
		"fallback": "hugeicons:codepen",
	});
}

export default Component;
