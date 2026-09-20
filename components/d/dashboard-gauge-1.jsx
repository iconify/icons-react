import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/i/ipgzpqb5j.css';
import '../../css/k/ktyd_mg4r.css';
import '../../css/l/la777zsdh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="ipgzpqb5j"/><path class="ktyd_mg4r"/><path class="la777zsdh"/></g>`,
		"fallback": "streamline-flex-color:dashboard-gauge-1",
	});
}

export default Component;
