import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wlrytz5ev.css';
import '../../css/v/vn6ydacuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wlrytz5ev"/><path class="vn6ydacuo"/></g>`,
		"fallback": "matita:corner-up-right",
	});
}

export default Component;
