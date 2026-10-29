import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lggc47b1l.css';
import '../../css/h/hfmjco30i.css';
import '../../css/j/j2lty-60i.css';
import '../../css/s/shw1frbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lggc47b1l wm-k"/><path class="hfmjco30i wm-a"/><path class="j2lty-60i wm-k"/><path class="shw1frbig wm-a"/></g>`,
		"fallback": "withicons:chart-donut-sketch",
	});
}

export default Component;
