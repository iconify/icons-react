import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wrzg7sb4i.css';
import '../../css/j/j7rx7-6xl.css';
import '../../css/m/muiqo2blt.css';
import '../../css/n/n0z0dgety.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wrzg7sb4i"/><path class="j7rx7-6xl wm-a"/><path class="muiqo2blt wm-k"/><path class="n0z0dgety wm-s"/></g>`,
		"fallback": "withicons:copy-check-sketch",
	});
}

export default Component;
