import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wui9oebxu.css';
import '../../css/c/ck31hzb3q.css';
import '../../css/b/bpnjzj0ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wui9oebxu"/><path class="ck31hzb3q"/><path class="bpnjzj0ou"/></g>`,
		"fallback": "streamline-ultimate:earth-pin-2",
	});
}

export default Component;
