import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b9hwg5m9c.css';
import '../../css/s/s9mzs9b1n.css';
import '../../css/a/amnapxbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b9hwg5m9c"/><path class="s9mzs9b1n"/><path class="amnapxbxy"/></g>`,
		"fallback": "solar:call-medicine-rounded-line-duotone",
	});
}

export default Component;
