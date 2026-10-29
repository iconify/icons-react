import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w6n12bf4c.css';
import '../../css/m/mofnaebna.css';
import '../../css/g/g2gi1nbsb.css';
import '../../css/r/rds1m8b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w6n12bf4c"/><path class="mofnaebna wm-a"/><path class="g2gi1nbsb wm-k"/><path class="rds1m8b5p wm-a"/></g>`,
		"fallback": "withicons:brain-circuit-sketch",
	});
}

export default Component;
