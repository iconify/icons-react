import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/p/p44rmkbrc.css';
import '../../css/u/u7vz-7brh.css';
import '../../css/j/jkkrvvbkr.css';
import '../../css/v/ve8sh8y3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOvCjGcgp" x1="0" x2="0" y1="-45.95" y2="74.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVG1TJcicIG" x1=".6" x2="23.4" y1="2.1" y2="23.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGOvCjGcgp)" class="p44rmkbrc wm-shadow"/><path class="u7vz-7brh wm-k"/><path fill="url(#SVG1TJcicIG)" class="jkkrvvbkr wm-k"/><path class="ve8sh8y3z wm-a"/></g>`,
		"fallback": "withicons-suite:door-open",
	});
}

export default Component;
