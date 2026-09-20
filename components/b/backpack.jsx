import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/d/dvgxmdblw.css';
import '../../css/l/ld30arbtk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yjvpx8kkv.css';
import '../../css/j/jfzy-rk_q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="dvgxmdblw"/><path class="ld30arbtk"/></g><g class="ij2x_72vy"><path class="yjvpx8kkv"/><path class="jfzy-rk_q"/></g>`,
		"fallback": "openmoji:backpack",
	});
}

export default Component;
