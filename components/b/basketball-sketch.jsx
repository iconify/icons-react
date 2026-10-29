import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bc2a5pb0l.css';
import '../../css/t/timyirbcb.css';
import '../../css/l/lf5_obwyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bc2a5pb0l"/><path class="timyirbcb wm-k"/><path class="lf5_obwyo wm-a"/></g>`,
		"fallback": "withicons:basketball-sketch",
	});
}

export default Component;
