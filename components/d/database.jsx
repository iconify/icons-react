import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwdzisbtb.css';
import '../../css/y/yk0p5wm_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hwdzisbtb"/><path class="yk0p5wm_s"/></g>`,
		"fallback": "charm:database",
	});
}

export default Component;
