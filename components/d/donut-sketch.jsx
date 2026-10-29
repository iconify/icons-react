import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m3dedbbyn.css';
import '../../css/o/ods51qbhy.css';
import '../../css/x/x2chrcbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m3dedbbyn"/><path class="ods51qbhy wm-k"/><path class="wm-a x2chrcbtq"/></g>`,
		"fallback": "withicons:donut-sketch",
	});
}

export default Component;
