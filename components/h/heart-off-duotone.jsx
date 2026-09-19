import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbvctibfr.css';
import '../../css/p/p75y43bht.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbvctibfr"/><path class="p75y43bht"/><path class="n35dlibfy"/></g>`,
		"fallback": "iconamoon:heart-off-duotone",
	});
}

export default Component;
