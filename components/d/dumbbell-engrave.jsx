import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w3dl34bcg.css';
import '../../css/a/at5oncb-d.css';
import '../../css/g/gndq0ebyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w3dl34bcg"/><path class="at5oncb-d wm-shadow"/><path class="gndq0ebyi"/></g>`,
		"fallback": "withicons:dumbbell-engrave",
	});
}

export default Component;
