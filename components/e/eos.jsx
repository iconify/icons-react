import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j7dfqjbmm.css';
import '../../css/f/fpfxxsnbt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="j7dfqjbmm"/><path class="fpfxxsnbt"/></g>`,
		"fallback": "cryptocurrency-color:eos",
	});
}

export default Component;
