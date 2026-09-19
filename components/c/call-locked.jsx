import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ws29m4m.css';
import '../../css/c/ctyqw7bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x3ws29m4m"/><path class="ctyqw7bqu"/></g>`,
		"fallback": "hugeicons:call-locked",
	});
}

export default Component;
