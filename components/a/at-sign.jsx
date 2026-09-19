import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zuqom4hga.css';
import '../../css/d/d045zbxvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zuqom4hga"/><path class="d045zbxvi"/></g>`,
		"fallback": "hugeicons:at-sign",
	});
}

export default Component;
