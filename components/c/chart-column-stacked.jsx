import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sxk83jy9x.css';
import '../../css/x/xsr1rtb_t.css';
import '../../css/x/x0q3axb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJXjLAegS" x1="9" x2="15" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJXjLAegS)" class="sxk83jy9x"/><path class="wm-a xsr1rtb_t"/><path class="wm-shine x0q3axb-v"/></g>`,
		"fallback": "withicons-utsav:chart-column-stacked",
	});
}

export default Component;
