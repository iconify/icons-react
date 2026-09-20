import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pcl3d89qc.css';
import '../../css/l/la7gkwdbc.css';
import '../../css/n/nv0xecb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pcl3d89qc"/><path class="la7gkwdbc"/><path class="nv0xecb8e"/></g>`,
		"fallback": "keyline-icons:headset-off-sharp-two-tone",
	});
}

export default Component;
