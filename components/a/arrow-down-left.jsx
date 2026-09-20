import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mslssib2x.css';
import '../../css/a/awss8-wyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mslssib2x"/><path class="awss8-wyp"/></g>`,
		"fallback": "mage:arrow-down-left",
	});
}

export default Component;
