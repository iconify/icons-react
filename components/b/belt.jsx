import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/npljkgdue.css';
import '../../css/j/j5htyubja.css';
import '../../css/o/oem2-9olf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="npljkgdue"/><path class="j5htyubja"/><path class="oem2-9olf"/></g>`,
		"fallback": "hugeicons:belt",
	});
}

export default Component;
