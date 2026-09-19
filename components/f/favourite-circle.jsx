import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vyzc02u8i.css';
import '../../css/r/r1zod-buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vyzc02u8i"/><path class="r1zod-buj"/></g>`,
		"fallback": "hugeicons:favourite-circle",
	});
}

export default Component;
