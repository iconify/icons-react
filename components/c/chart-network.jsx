import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dlydynbyl.css';
import '../../css/c/cckk64--m.css';
import '../../css/w/wxx4rqoic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWZI12dHK" x1="9.37" x2="15.37" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGWZI12dHK)" class="dlydynbyl"/><path class="cckk64--m wm-a"/><path class="wm-shine wxx4rqoic"/></g>`,
		"fallback": "withicons-utsav:chart-network",
	});
}

export default Component;
