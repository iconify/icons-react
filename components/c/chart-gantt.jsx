import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/hexl5i5zf.css';
import '../../css/o/oija-1i5s.css';
import '../../css/g/gdklhabge.css';
import '../../css/w/wcwvempyf.css';
import '../../css/g/gwyp4rbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG43MPIdIC" x1="0" x2="0" y1="-44.25" y2="75.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGH7lQ5bgL" x1="6.6" x2="21.9" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGIvAGLdeg" x1="2.1" x2="5.9" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVG43MPIdIC)" class="hexl5i5zf wm-shadow"/><path class="oija-1i5s wm-a"/><path fill="url(#SVGH7lQ5bgL)" class="gdklhabge wm-a"/><path class="wcwvempyf wm-k"/><path fill="url(#SVGIvAGLdeg)" class="gwyp4rbwb wm-k"/></g>`,
		"fallback": "withicons-suite:chart-gantt",
	});
}

export default Component;
