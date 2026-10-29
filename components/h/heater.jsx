import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/hswe4e6ov.css';
import '../../css/z/z5tmrmo8e.css';
import '../../css/e/e6clj_bzu.css';
import '../../css/e/eytaarxqw.css';
import '../../css/v/vstbmebce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnJOFqcVm" x1="0" x2="0" y1="-39.95" y2="80.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGTHrHBc0u" x1="2.1" x2="21.9" y1="7.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGnJOFqcVm)" class="hswe4e6ov wm-shadow"/><path class="wm-k z5tmrmo8e"/><path fill="url(#SVGTHrHBc0u)" class="e6clj_bzu wm-k"/><path class="eytaarxqw wm-a"/><path class="vstbmebce wm-s"/></g>`,
		"fallback": "withicons-suite:heater",
	});
}

export default Component;
