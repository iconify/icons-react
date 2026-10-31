import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bcnplsbcp.css';
import '../../css/e/ect6lbcef.css';
import '../../css/s/s877lqbxq.css';
import '../../css/s/sigsp0bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNAtBfbbw" x1="9" x2="15" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGNAtBfbbw)" class="bcnplsbcp"/><path class="ect6lbcef wm-shine"/><path class="s877lqbxq wm-shine"/><path class="sigsp0bpy wm-shine"/></g>`,
		"fallback": "withicons-utsav:bot-message-square",
	});
}

export default Component;
