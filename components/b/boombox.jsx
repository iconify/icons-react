import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmu0cybng.css';
import '../../css/d/dvvbd46va.css';
import '../../css/v/vdk6b1irq.css';
import '../../css/d/dhvygdbnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qmu0cybng"/><path class="dvvbd46va"/><path class="vdk6b1irq"/><path class="dhvygdbnc"/></g>`,
		"fallback": "bi:boombox",
	});
}

export default Component;
