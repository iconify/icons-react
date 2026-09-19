import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl5setcia.css';
import '../../css/r/rfhv6dwjy.css';
import '../../css/g/g-pa23blj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hl5setcia"/><path class="rfhv6dwjy"/><path class="g-pa23blj"/></g>`,
		"fallback": "bi:house-gear-fill",
	});
}

export default Component;
