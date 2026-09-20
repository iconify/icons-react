import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j_wz-sbbs.css';
import '../../css/n/n0xr2eufk.css';
import '../../css/e/ee8w7db-e.css';
import '../../css/r/rt4u9gi1c.css';
import '../../css/e/e368nfbsn.css';
import '../../css/v/v21qiwb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j_wz-sbbs"/><path class="n0xr2eufk"/><path class="ee8w7db-e"/><path class="rt4u9gi1c"/><path class="e368nfbsn"/><path class="v21qiwb4s"/></g>`,
		"fallback": "solar:folder-zip-linear",
	});
}

export default Component;
