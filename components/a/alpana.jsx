import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p_mmy2l2f.css';
import '../../css/a/asxb4xunu.css';
import '../../css/s/sap_tdq8c.css';
import '../../css/v/vjn-glt8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="p_mmy2l2f wm-shadow"/><path class="asxb4xunu wm-k"/><path class="sap_tdq8c wm-a"/><path class="vjn-glt8x wm-deco"/></g>`,
		"fallback": "withicons-brutal:alpana",
	});
}

export default Component;
