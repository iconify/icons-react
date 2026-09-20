import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lb-mybcgs.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/v/vigqkobhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lb-mybcgs"/><path class="tg6vyv3do"/><path class="jct4a2bzg"/><path class="vigqkobhn"/></g>`,
		"fallback": "solar:case-linear",
	});
}

export default Component;
