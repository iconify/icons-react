import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h14407b5a.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';
import '../../css/k/kwa7-tyjx.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h14407b5a"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/><path class="kwa7-tyjx"/><path class="a0l-fdc8b"/></g>`,
		"fallback": "solar:diploma-verified-linear",
	});
}

export default Component;
