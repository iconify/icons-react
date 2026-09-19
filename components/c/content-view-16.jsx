import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itujvujyz.css';
import '../../css/o/oj2qb0b6x.css';
import '../../css/y/y8pwr279m.css';
import '../../css/b/bd93sf5sp.css';
import '../../css/f/fr236kbdl.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGV3s2fdnm)" class="itujvujyz"/><path fill="url(#SVGEzoYndvI)" class="oj2qb0b6x"/><defs><linearGradient id="SVGV3s2fdnm" x1="6.286" x2="10.883" y1="2" y2="13.353" gradientUnits="userSpaceOnUse"><stop class="y8pwr279m"/><stop offset="1" class="bd93sf5sp"/></linearGradient><linearGradient id="SVGEzoYndvI" x1="4" x2="13.609" y1="4" y2="7.266" gradientUnits="userSpaceOnUse"><stop class="fr236kbdl"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:content-view-16",
	});
}

export default Component;
