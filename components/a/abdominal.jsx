import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7atdpspj.css';
import '../../css/t/tqp7o2blh.css';
import '../../css/i/ixx8uwlsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7atdpspj"/><path class="tqp7o2blh"/><path class="ixx8uwlsa"/></g>`,
		"fallback": "icon-park-outline:abdominal",
	});
}

export default Component;
