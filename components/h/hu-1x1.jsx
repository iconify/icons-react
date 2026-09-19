import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/de5y7ab3j.css';
import '../../css/y/y79jq3fxj.css';
import '../../css/n/n023_vp0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="de5y7ab3j"/><path class="y79jq3fxj"/><path class="n023_vp0h"/></g>`,
		"fallback": "flag:hu-1x1",
	});
}

export default Component;
