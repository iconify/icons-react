import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yaetbdc1q.css';
import '../../css/o/o4hak_sxi.css';
import '../../css/d/dfnnh7b0k.css';
import '../../css/d/db01hi87v.css';
import '../../css/v/vglod77-y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yaetbdc1q"/><path class="o4hak_sxi"/><path class="dfnnh7b0k"/><path class="db01hi87v"/><path class="vglod77-y"/></g>`,
		"fallback": "streamline-color:cake-slice",
	});
}

export default Component;
