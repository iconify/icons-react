import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq1a7k2xp.css';
import '../../css/m/m_nwtv2pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pq1a7k2xp"/><path class="m_nwtv2pf"/></g>`,
		"fallback": "tdesign:indicator",
	});
}

export default Component;
