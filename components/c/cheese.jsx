import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpwdembfl.css';
import '../../css/f/fw4-fzb6x.css';
import '../../css/n/n5u1h75-b.css';
import '../../css/j/j4zuf2bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vpwdembfl"/><path class="fw4-fzb6x"/><path class="n5u1h75-b"/><path class="j4zuf2bmi"/></g>`,
		"fallback": "andrsrxn:cheese",
	});
}

export default Component;
