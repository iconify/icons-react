import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xs--b7q-p.css';
import '../../css/z/zrp9frbsy.css';
import '../../css/l/lqml3acji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xs--b7q-p"/><path class="zrp9frbsy"/><path class="lqml3acji"/></g>`,
		"fallback": "mage:archive",
	});
}

export default Component;
