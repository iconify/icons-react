import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ui-h4lkhg.css';
import '../../css/d/dmrwy4buz.css';
import '../../css/h/hwksmab1d.css';
import '../../css/m/mclry9-jv.css';
import '../../css/d/djj1_0nws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ui-h4lkhg"/><path class="dmrwy4buz wm-k"/><path class="hwksmab1d wm-k"/><path class="mclry9-jv wm-a"/><path class="djj1_0nws wm-a"/></g>`,
		"fallback": "withicons:chart-gantt-sketch",
	});
}

export default Component;
