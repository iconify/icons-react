import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m2f-98b-g.css';
import '../../css/e/ermpxld1n.css';
import '../../css/u/ugycw5bkg.css';
import '../../css/m/msq3lnbyw.css';
import '../../css/v/v9qcr0r8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m2f-98b-g wm-shadow"/><path class="ermpxld1n"/><path class="ugycw5bkg"/><path class="msq3lnbyw"/><path class="v9qcr0r8o"/></g>`,
		"fallback": "withicons-retro:briefcase",
	});
}

export default Component;
