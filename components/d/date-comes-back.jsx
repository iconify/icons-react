import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/ndosfwbcn.css';
import '../../css/h/hq88w9bmm.css';
import '../../css/j/j4cdcjb7v.css';
import '../../css/h/h33e40b6x.css';
import '../../css/m/merlzwb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ndosfwbcn"/><path class="hq88w9bmm"/><path class="j4cdcjb7v"/><path class="h33e40b6x"/><path class="merlzwb_i"/></g>`,
		"fallback": "icon-park:date-comes-back",
	});
}

export default Component;
