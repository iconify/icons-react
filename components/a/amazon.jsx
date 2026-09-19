import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/grihvgvxz.css';
import '../../css/e/eba2v5bks.css';
import '../../css/u/uy0ec1b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="grihvgvxz"/><path class="eba2v5bks"/><path class="uy0ec1b-z"/></g>`,
		"fallback": "hugeicons:amazon",
	});
}

export default Component;
