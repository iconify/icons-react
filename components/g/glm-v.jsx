import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lp5mazb6p.css';
import '../../css/l/l3dlbdkcm.css';
import '../../css/x/xl200acgv.css';
import '../../css/r/r3_65vfaw.css';
import '../../css/g/gxhyj8s7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lp5mazb6p"/><path class="l3dlbdkcm"/><path class="xl200acgv"/><path class="r3_65vfaw"/><path class="gxhyj8s7e"/></g>`,
		"fallback": "thesvg:glm-v",
	});
}

export default Component;
