import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4nyqcchx.css';
import '../../css/w/wa2lq1bmf.css';
import '../../css/j/jje4tjgwk.css';
import '../../css/d/dluc55baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d4nyqcchx"/><path class="wa2lq1bmf wm-a"/><path class="jje4tjgwk wm-k"/><path class="dluc55baa wm-a"/></g>`,
		"fallback": "withicons:cloud-rain-wind-sketch",
	});
}

export default Component;
