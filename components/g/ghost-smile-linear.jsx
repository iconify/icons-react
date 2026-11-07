import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/wtzf3ijxf.css';
import '../../css/s/sjsm3spaf.css';
import '../../css/s/sygjb24yx.css';
import '../../css/u/u7snxmbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="wtzf3ijxf"/><path class="sjsm3spaf"/><path class="sygjb24yx"/><ellipse class="u7snxmbok"/></g>`,
		"fallback": "solar:ghost-smile-linear",
	});
}

export default Component;
