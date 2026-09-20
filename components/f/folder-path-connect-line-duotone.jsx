import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ifmngxb5v.css';
import '../../css/c/c381zdbqu.css';
import '../../css/o/oegc6caso.css';
import '../../css/d/ds1vr8vmh.css';
import '../../css/s/swsab_86e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ifmngxb5v"/><path class="c381zdbqu"/><path class="oegc6caso"/><path class="ds1vr8vmh"/><circle class="swsab_86e"/></g>`,
		"fallback": "solar:folder-path-connect-line-duotone",
	});
}

export default Component;
