import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lo1tr_b1c.css';
import '../../css/n/na3rfosvr.css';
import '../../css/j/jgz8mubms.css';
import '../../css/w/w62x13bmw.css';
import '../../css/r/rsai_abhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lo1tr_b1c wm-k"/><path class="na3rfosvr wm-a"/><path class="jgz8mubms wm-shadow"/><path class="w62x13bmw wm-k"/><path class="rsai_abhp wm-a"/></g>`,
		"fallback": "withicons:airplay-engrave",
	});
}

export default Component;
