import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/e/ee74i2ndo.css';
import '../../css/d/don1cjfuy.css';
import '../../css/c/c1qzu501d.css';
import '../../css/b/bg4lkhcmo.css';
import '../../css/g/gm1-yds8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDEmMleTG" x1="11.1" x2="12.9" y1="1.6" y2="22.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGj8gDUd4q" x1="6.4" x2="17.6" y1="3.9" y2="20.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="ee74i2ndo wm-a"/><path fill="url(#SVGDEmMleTG)" class="don1cjfuy wm-a"/><path class="c1qzu501d wm-k"/><path class="bg4lkhcmo wm-k"/><path fill="url(#SVGj8gDUd4q)" class="gm1-yds8b wm-k"/></g>`,
		"fallback": "withicons-suite:dollar-sign",
	});
}

export default Component;
