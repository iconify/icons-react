import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ti_-bgbup.css';
import '../../css/s/svnjt8bpr.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/u/uxz8njb2w.css';
import '../../css/i/i-oq5ub8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ti_-bgbup wm-k"/><path class="svnjt8bpr wm-shadow"/><path class="mdvkx-geo wm-k"/><path class="uxz8njb2w wm-k"/><path class="i-oq5ub8f wm-a"/></g>`,
		"fallback": "withicons:avatar-bear-engrave",
	});
}

export default Component;
