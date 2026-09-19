import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/r/rv9xn1b9q.css';
import '../../css/m/mh_q3pbjg.css';
import '../../css/u/uuuzw-biv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="rv9xn1b9q"/><path class="mh_q3pbjg"/><path class="uuuzw-biv"/></g>`,
		"fallback": "icon-park:girl",
	});
}

export default Component;
