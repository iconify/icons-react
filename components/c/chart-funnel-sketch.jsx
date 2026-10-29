import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qf3oh9fzo.css';
import '../../css/k/k138lobuf.css';
import '../../css/g/g0edfytvp.css';
import '../../css/b/b_cca24xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qf3oh9fzo wm-deco"/><path class="k138lobuf wm-k"/><path class="g0edfytvp wm-k"/><path class="b_cca24xi wm-a"/></g>`,
		"fallback": "withicons:chart-funnel-sketch",
	});
}

export default Component;
