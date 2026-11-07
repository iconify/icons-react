import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/awr1zxi0y.css';
import '../../css/d/dh-362btw.css';
import '../../css/u/uniftz_yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="awr1zxi0y"/><path class="dh-362btw"/><path class="uniftz_yv"/></g>`,
		"fallback": "solar:armchair-line-duotone",
	});
}

export default Component;
