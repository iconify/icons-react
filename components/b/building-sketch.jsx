import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwq1ipb-a.css';
import '../../css/y/y516q1b7t.css';
import '../../css/u/u79d_sb8z.css';
import '../../css/u/ugvm93m5y.css';
import '../../css/h/hqoal7mrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dwq1ipb-a"/><path class="wm-k y516q1b7t"/><path class="u79d_sb8z wm-a"/><path class="ugvm93m5y wm-k"/><path class="hqoal7mrj wm-a"/></g>`,
		"fallback": "withicons:building-sketch",
	});
}

export default Component;
