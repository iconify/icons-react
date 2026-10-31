import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gp6s-ybdd.css';
import '../../css/h/hxfid1k2a.css';
import '../../css/h/h4ypgjbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGU6HNpIoW" x1="10.25" x2="16.25" y1="1.3" y2="22.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGU6HNpIoW)" class="gp6s-ybdd"/><path class="hxfid1k2a wm-a"/><path class="h4ypgjbkp wm-shine"/></g>`,
		"fallback": "withicons-utsav:axe",
	});
}

export default Component;
