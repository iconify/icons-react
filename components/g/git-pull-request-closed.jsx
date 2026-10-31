import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pxm3t__cc.css';
import '../../css/m/mhg49_bwy.css';
import '../../css/e/egzhai3sf.css';
import '../../css/v/v6sn10blx.css';
import '../../css/c/cr4avkb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pxm3t__cc wm-shadow"/><path class="mhg49_bwy wm-shadow"/><path class="egzhai3sf"/><path class="v6sn10blx"/><path class="cr4avkb_x wm-s"/></g>`,
		"fallback": "withicons-brutal:git-pull-request-closed",
	});
}

export default Component;
