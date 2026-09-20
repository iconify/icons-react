import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/d/d-3h37-ms.css';
import '../../css/o/oqzpqv97y.css';
import '../../css/b/byonj9b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="d-3h37-ms"/><path class="oqzpqv97y"/><path class="byonj9b2c"/></g>`,
		"fallback": "solar:document-medicine-linear",
	});
}

export default Component;
