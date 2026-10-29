import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nmw4e_-1p.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/ih5ukqcla.css';
import '../../css/d/digmi6b5l.css';
import '../../css/k/k-z3g5b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nmw4e_-1p wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ih5ukqcla wm-k"/><path class="digmi6b5l wm-a"/><path class="k-z3g5b2i wm-k"/></g>`,
		"fallback": "withicons:contact-blueprint",
	});
}

export default Component;
