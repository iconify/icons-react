import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-h_snbkr.css';
import '../../css/t/tjbwptb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r-h_snbkr"/><path class="tjbwptb_r"/></g>`,
		"fallback": "iconoir:alarm",
	});
}

export default Component;
