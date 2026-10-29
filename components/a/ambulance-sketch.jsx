import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqtbwreef.css';
import '../../css/y/y5ibkwb3c.css';
import '../../css/i/ixkdbb2ly.css';
import '../../css/p/p5j8ju-6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kqtbwreef"/><path class="wm-a y5ibkwb3c"/><path class="ixkdbb2ly wm-k"/><path class="p5j8ju-6f wm-a"/></g>`,
		"fallback": "withicons:ambulance-sketch",
	});
}

export default Component;
