import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y69324s2k.css';
import '../../css/r/r2x8l0bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y69324s2k"/><path class="r2x8l0bfc"/></g>`,
		"fallback": "solar:arrow-left-from-line-broken",
	});
}

export default Component;
