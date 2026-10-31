import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/iwzatkb2h.css';
import '../../css/g/gb1nl-bmh.css';
import '../../css/u/uh6di0wke.css';
import '../../css/u/u6g6fnupx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="iwzatkb2h"/><path class="gb1nl-bmh wm-a"/><path class="uh6di0wke wm-s"/><path class="u6g6fnupx wm-shine"/></g>`,
		"fallback": "withicons-utsav:bell-off",
	});
}

export default Component;
