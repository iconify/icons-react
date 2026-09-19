import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0yeiclwc.css';
import '../../css/e/e4p5-xbcp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q0yeiclwc"/><path class="e4p5-xbcp"/></g>`,
		"fallback": "charm:bluetooth-slash",
	});
}

export default Component;
