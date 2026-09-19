import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5gu_ob2c.css';
import '../../css/u/ub_8skk_q.css';
import '../../css/y/y8pwr279m.css';
import '../../css/b/bd93sf5sp.css';
import '../../css/f/fr236kbdl.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG12vTIbdp)" class="i5gu_ob2c"/><path fill="url(#SVGRfsWseDm)" class="ub_8skk_q"/><defs><linearGradient id="SVG12vTIbdp" x1="12.566" x2="21.761" y1="4" y2="26.706" gradientUnits="userSpaceOnUse"><stop class="y8pwr279m"/><stop offset="1" class="bd93sf5sp"/></linearGradient><linearGradient id="SVGRfsWseDm" x1="8" x2="26.948" y1="9" y2="15.869" gradientUnits="userSpaceOnUse"><stop class="fr236kbdl"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:content-view-32",
	});
}

export default Component;
