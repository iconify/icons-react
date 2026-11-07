import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/l/l60a6dbzb.css';
import '../../css/g/gsp36vw2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="l60a6dbzb"/><path class="gsp36vw2y"/></g>`,
		"fallback": "solar:gallery-check-linear",
	});
}

export default Component;
