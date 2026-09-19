import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjm4824mc.css';
import '../../css/m/md286fbip.css';
import '../../css/i/ij7fy157e.css';
import '../../css/m/mv110rcjt.css';
import '../../css/i/i3xpon6oj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gjm4824mc"/><g class="md286fbip"><path class="ij7fy157e"/><path class="mv110rcjt"/><path class="i3xpon6oj"/></g></g>`,
		"fallback": "cryptocurrency-color:btch",
	});
}

export default Component;
