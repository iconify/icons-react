import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xoimldhit.css';
import '../../css/p/plk93bc0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xoimldhit"/><path class="plk93bc0q"/></g>`,
		"fallback": "mage:arrow-down-right",
	});
}

export default Component;
