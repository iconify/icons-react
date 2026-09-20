import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ley58n3yy.css';
import '../../css/r/r31eezbqv.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ley58n3yy"/><path class="r31eezbqv"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:graph-down-new-linear",
	});
}

export default Component;
