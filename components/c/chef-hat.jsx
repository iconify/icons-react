import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ipplhmb4c.css';
import '../../css/o/oa4-clb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ipplhmb4c"/><path class="oa4-clb8q"/></g>`,
		"fallback": "hugeicons:chef-hat",
	});
}

export default Component;
