import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lw-gki7ii.css';
import '../../css/b/bb-gp60lh.css';
import '../../css/r/r0csu8bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lw-gki7ii"/><path class="bb-gp60lh"/><path class="r0csu8bbg"/></g>`,
		"fallback": "reicon:designtools",
	});
}

export default Component;
