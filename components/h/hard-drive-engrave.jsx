import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/plgmnm5bs.css';
import '../../css/r/rvadobhgc.css';
import '../../css/c/c-n-9gpof.css';
import '../../css/k/km9xt0bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="plgmnm5bs wm-k"/><path class="rvadobhgc wm-shadow"/><path class="c-n-9gpof wm-k"/><path class="km9xt0bvl wm-a"/></g>`,
		"fallback": "withicons:hard-drive-engrave",
	});
}

export default Component;
