import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1_pjbc3p.css';
import '../../css/v/vwgo760mv.css';
import '../../css/j/jf6is2dzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1_pjbc3p"/><path class="vwgo760mv"/><circle class="jf6is2dzt"/></g>`,
		"fallback": "icon-park-outline:duck",
	});
}

export default Component;
