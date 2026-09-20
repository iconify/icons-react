import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xphp1wq6l.css';
import '../../css/u/uj6a6-2qa.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xphp1wq6l"/><path class="uj6a6-2qa"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-up-circle",
	});
}

export default Component;
