import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1_mtyflw.css';
import '../../css/x/xln2iofxm.css';
import '../../css/s/sc0vwobxe.css';
import '../../css/r/r_dyu4sco.css';
import '../../css/n/newr62bds.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y2n-rtl6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG3u7HFbEC)" class="y1_mtyflw"/><path class="xln2iofxm"/><path fill="url(#SVGCyTzByyo)" class="sc0vwobxe"/><defs><linearGradient id="SVG3u7HFbEC" x1="2.714" x2="16.517" y1="5.75" y2="20.09" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVGCyTzByyo" x1="9.25" x2="10.957" y1="8.816" y2="17.854" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:fast-forward-circle-24",
	});
}

export default Component;
