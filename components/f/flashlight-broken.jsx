import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r_vwx8mai.css';
import '../../css/m/mwgy38bvr.css';
import '../../css/v/vma4mubrc.css';
import '../../css/m/m4eix-b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r_vwx8mai"/><path class="mwgy38bvr"/><path class="vma4mubrc"/><path class="m4eix-b4z"/></g>`,
		"fallback": "solar:flashlight-broken",
	});
}

export default Component;
