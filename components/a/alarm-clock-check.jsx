import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dcp6dfbnm.css';
import '../../css/l/l0eeimbxm.css';
import '../../css/e/eky02mb3r.css';
import '../../css/o/obod75njs.css';
import '../../css/n/njsw-vhln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5uKAycmp" x1="8.99" x2="14.99" y1="1.24" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="dcp6dfbnm wm-s"/><path fill="url(#SVG5uKAycmp)" class="l0eeimbxm"/><path class="eky02mb3r wm-a"/><path class="obod75njs wm-s"/><path class="njsw-vhln wm-shine"/></g>`,
		"fallback": "withicons-utsav:alarm-clock-check",
	});
}

export default Component;
