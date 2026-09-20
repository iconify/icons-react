import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-p6p5bxm.css';
import '../../css/d/def56ab7g.css';
import '../../css/t/tt--iwa-j.css';
import '../../css/h/hne1dfb_x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-p6p5bxm"/><path class="def56ab7g"/><path class="tt--iwa-j"/><path class="hne1dfb_x"/></g>`,
		"fallback": "streamline-color:comet",
	});
}

export default Component;
