import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jsrzdnbpw.css';
import '../../css/a/ansa2ab2z.css';
import '../../css/g/g1l958bde.css';
import '../../css/d/dzjyg2btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jsrzdnbpw wm-a"/><path class="ansa2ab2z wm-k"/><path class="g1l958bde wm-k"/><path class="dzjyg2btd wm-a"/></g>`,
		"fallback": "withicons:chart-scatter-sketch",
	});
}

export default Component;
