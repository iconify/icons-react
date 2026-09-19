import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xktvohbrl.css';
import '../../css/m/m8l8w3o9n.css';
import '../../css/s/srykvsb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xktvohbrl"/><path class="m8l8w3o9n"/><path class="srykvsb6m"/></g>`,
		"fallback": "hugeicons:french-fries-01",
	});
}

export default Component;
