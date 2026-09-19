import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jka2iz_-u.css';
import '../../css/j/j6g153wwq.css';
import '../../css/l/l0vjopbdv.css';
import '../../css/c/c3v7qfbtf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jka2iz_-u"/><path class="j6g153wwq"/><path class="l0vjopbdv"/><path class="c3v7qfbtf"/></g>`,
		"fallback": "bi:cash-coin",
	});
}

export default Component;
