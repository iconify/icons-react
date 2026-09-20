import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sepbreh4q.css';
import '../../css/o/ortr5jbyd.css';
import '../../css/m/m_ib5tbyo.css';
import '../../css/y/ykz284bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sepbreh4q"/><path class="ortr5jbyd"/><path class="m_ib5tbyo"/><path class="ykz284bdt"/></g>`,
		"fallback": "streamline-sharp-color:following",
	});
}

export default Component;
