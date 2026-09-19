import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd88_0z7r.css';
import '../../css/e/ejd3y0bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gd88_0z7r"/><path class="ejd3y0bmt"/></g>`,
		"fallback": "hugeicons:home-08",
	});
}

export default Component;
