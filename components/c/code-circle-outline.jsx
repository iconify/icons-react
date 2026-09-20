import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky_c7b80d.css';
import '../../css/n/nlm_cm0qu.css';
import '../../css/f/f_ps57bze.css';
import '../../css/s/se_om3jvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ky_c7b80d"/><path class="nlm_cm0qu"/><path class="f_ps57bze"/><path clip-rule="evenodd" class="se_om3jvd"/></g>`,
		"fallback": "solar:code-circle-outline",
	});
}

export default Component;
