import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m0w8b5b1u.css';
import '../../css/h/h5zj8ybah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m0w8b5b1u"/><path class="h5zj8ybah"/></g>`,
		"fallback": "hugeicons:balloon",
	});
}

export default Component;
