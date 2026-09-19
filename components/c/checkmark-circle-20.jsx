import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7_mroban.css';
import '../../css/v/v924y9b0q.css';
import '../../css/r/r_dyu4sco.css';
import '../../css/n/newr62bds.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y2n-rtl6f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG54VxVcoV)" class="c7_mroban"/><path fill="url(#SVGyLpyMeHv)" clip-rule="evenodd" class="v924y9b0q"/><defs><linearGradient id="SVG54VxVcoV" x1="2.571" x2="13.613" y1="5" y2="16.472" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVGyLpyMeHv" x1="7.813" x2="8.95" y1="8.01" y2="13.63" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:checkmark-circle-20",
	});
}

export default Component;
