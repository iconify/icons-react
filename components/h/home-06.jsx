import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/apmqgc5sw.css';
import '../../css/g/gb26cr2ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="apmqgc5sw"/><path class="gb26cr2ze"/></g>`,
		"fallback": "hugeicons:home-06",
	});
}

export default Component;
