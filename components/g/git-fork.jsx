import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/a/ain3z7bit.css';
import '../../css/u/uo2njb-bj.css';
import '../../css/v/vtk2_nhlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHKqEXlcA" x1="0" x2="0" y1="-45.3" y2="74.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGy2VhZ34V" x1="2.1" x2="21.9" y1="1.8" y2="22.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGHKqEXlcA)" class="ain3z7bit wm-shadow"/><path class="uo2njb-bj wm-k"/><path fill="url(#SVGy2VhZ34V)" class="vtk2_nhlx wm-k"/></g>`,
		"fallback": "withicons-suite:git-fork",
	});
}

export default Component;
