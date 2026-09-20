import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i64o46y4z.css';
import '../../css/g/ga5bx4--p.css';
import '../../css/p/p231qtbtj.css';
import '../../css/j/j9-q1ustb.css';
import '../../css/j/j9t8dhnvh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i64o46y4z"/><path class="ga5bx4--p"/><path class="p231qtbtj"/><path class="j9-q1ustb"/><path class="j9t8dhnvh"/></g>`,
		"fallback": "streamline-color:cloud-share",
	});
}

export default Component;
