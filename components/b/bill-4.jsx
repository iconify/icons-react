import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_c2fy4au.css';
import '../../css/c/ce899lqho.css';
import '../../css/z/z5a6jybuz.css';
import '../../css/s/swgts-b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n_c2fy4au"/><path class="ce899lqho"/><path class="z5a6jybuz"/><path class="swgts-b0a"/></g>`,
		"fallback": "streamline-sharp-color:bill-4",
	});
}

export default Component;
