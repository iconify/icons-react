import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-3h37-ms.css';
import '../../css/r/ruv56nblh.css';
import '../../css/b/byonj9b2c.css';
import '../../css/h/h4m9tpedx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d-3h37-ms"/><path class="ruv56nblh"/><path class="byonj9b2c"/><path class="h4m9tpedx"/></g>`,
		"fallback": "solar:document-medicine-broken",
	});
}

export default Component;
