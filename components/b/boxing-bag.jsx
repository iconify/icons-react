import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohixrvbsc.css';
import '../../css/w/w3ct1cuzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ohixrvbsc"/><path class="w3ct1cuzt"/></g>`,
		"fallback": "hugeicons:boxing-bag",
	});
}

export default Component;
