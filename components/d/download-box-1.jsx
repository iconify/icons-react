import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pvt2e0blh.css';
import '../../css/d/d-z2jhjiw.css';
import '../../css/e/ed8eizzez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pvt2e0blh"/><path class="d-z2jhjiw"/><path class="ed8eizzez"/></g>`,
		"fallback": "streamline-sharp-color:download-box-1",
	});
}

export default Component;
